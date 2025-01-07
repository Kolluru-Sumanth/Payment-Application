const express = require("express");
const port=3000;
const app=express();
const cors=require('cors')
const mainRoute=require("./routes/mainRouter")

app.use(express.json());
app.use(cors());
app.use("/api/v1",mainRoute);
app.use("/api/v1",mainRoute)

app.listen(port,()=>{
    console.log("listening at "+port);
})

