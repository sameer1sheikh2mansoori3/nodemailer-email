import http from "http";
import nodemailer from "nodemailer";
import express from 'express'
const app = express()
app.get("/api/v1/sendemail" , (req , res)=>{

    const auth = nodemailer.createTransport({
        service: "gmail",
        secure : true,
        port : 465,
        auth: {
            user: "sameersheikhmansoori@gmail.com",
            pass: "alwsgrjdxpwaajkb"

        }
    });

    const receiver = {
        from : "sameersheikhmansoori@gmail.com",
        to : "romeersm@gmail.com",
        subject : "Node Js Mail Testing!",
        text : "Hello this is a text mail!"
    };

  auth.sendMail(receiver , (err)=>{
    console.log(err)
  })

})

app.listen(8000 , ()=>{
    console.log(`server is running at 8000`)
})