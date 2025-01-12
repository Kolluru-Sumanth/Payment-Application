const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const user = req.userId;

    const userData = await Account.findOne({ userId: user })

    res.status(200).json({
        balance: userData.balance
    });
});

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    try {
        const to= req.query.to
        const { amount } = req.body;

        const fromUserAccount = await Account.findOne({ userId: req.userId }).session(session);
        if (fromUserAccount.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({ msg: "insufficient balance" });
        };

        const toUserAccount = await Account.findOne({ userId: to }).session(session);
        if (!toUserAccount) {
            await session.abortTransaction();
            return res.status(400).json({ msg: "To user doesn't exist" });
        }

        await fromUserAccount.updateOne({ $inc: { balance: -amount } }).session(session);
        await toUserAccount.updateOne({ $inc: { balance: amount } }).session(session);

        await session.commitTransaction();
        return res.status(200).json({ msg: "Transfer Successfull" });
    } catch (error) {
        await session.abortTransaction();
        console.log(error);
        return res.status(400).json({error:error});
    }
    finally{
        session.endSession();

    }
});

module.exports = router;