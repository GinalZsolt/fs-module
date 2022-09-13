const { parseArgs } = require('util')

const express = require('express'), path = require('path'),app= express(),fs=require('fs')

app.listen(3000)

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"/urlap.html"))
})
app.post("/senddata",(req,res)=>{
    let becenev=req.body.becenev,
        kor=req.body.kor,
        fajta=req.body.fajta,
        leiras=req.body.leiras
    fs.appendFile('adatok.txt',`${becenev}|${kor}|${fajta}|${leiras}\n`,(err)=>{
        if (err) {
            res.status(500).send('hiba')
        }
        else{
            res.status(200).send("gud")
        }
    })
})