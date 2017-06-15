	$(function () {
		var reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
		$("#btn").click(function () {
			var email = $("#email").val();
			if(reg.test(email)){
				$.ajax({
					type:"post",
					url:"http://localhost:3000/sendMail",
					async:true,
					data :{
						adress :email ,//收信人地址
						subject :"测试邮件",//邮件主题
						html :"hello World !"//邮件内容
					}
				});
			}else{
				alert("邮件格式错误！")
			}
		})
	})