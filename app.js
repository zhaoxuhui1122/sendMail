const express = require("express");
const app = express() ;
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(express.static("static")); //Express 托管静态文,/css/style.css
app.set("views", "./views"); //设置根目录
app.set("view engine", "jade"); //设置默认模板
app.use(bodyParser.json()); //body-parser
app.use(bodyParser.urlencoded({extended: true}));

//service
const sendMail = require("./service/email"); //email
//请求接口
app.post("/sendMail", sendMail);
app.get("/",function(req,res){
	res.render("sendmail");
})
//启动服务
app.listen(port, function() {
	console.log("server start at", port);
});