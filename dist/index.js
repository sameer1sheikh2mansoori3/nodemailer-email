"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/api/v1/sendemail", (req, res) => {
    const auth = nodemailer_1.default.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: "sameersheikhmansoori@gmail.com",
            pass: "alwsgrjdxpwaajkb"
        }
    });
    const receiver = {
        from: "sameersheikhmansoori@gmail.com",
        to: "romeersm@gmail.com",
        subject: "Node Js Mail Testing!",
        text: "Hello this is a text mail!"
    };
    auth.sendMail(receiver, (err) => {
        console.log(err);
    });
});
app.listen(8000, () => {
    console.log(`server is running at 8000`);
});
