const express = require("express");
const app = express();
const PORT = 4000;
const connection=require("./config/db");
app.use(express.json());//middleware
connection();


const studentRouter=require("./routes/studentRouter")

app.use("/students",studentRouter);

app.listen(PORT,()=>{
    console.log("server running on port",PORT);
    
})
