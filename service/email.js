const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport');
const config = require('../config/email')
//根据配置文件生成 smtpTransport
transporter = nodemailer.createTransport(smtpTransport({
    service: config.email.service,
    auth: {
        user: config.email.user,//发信人账号
        pass: config.email.pass//发信人密码
    }
}));

module.exports = function(req,res){
     transporter.sendMail({
        from: config.email.user,//发信人config
        to: req.body.adress, //adress 收件人
        subject: req.body.subject,//subject 发送的主题
        html: req.body.html//html 发送的html内容

    }, function (err, result) {
        if (err) {
        		console.log(err);
            res.json("error");
        }else{
        	  	res.json("success");
        	  	console.log("success");
        }
        
    });
 }