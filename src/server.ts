const express = require('express')
const app = express()




app.get("/welcome",(req:any,res:any)=>{
    res.write(`<h1>welcome ${"sravan"}</h1>`)
})



app.listen(5002,()=>{
    console.log(`server running on ${5002}`)
})