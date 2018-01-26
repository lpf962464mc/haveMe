

$(function(){
	//点击不同登录方式,出现的效果不同
	var num=0;
	$(".title span").each(function(i){
		$(this).click(function(){
				$(".title span").css({"border-bottom": "1px solid #e6e6e6","color":"#999999"});
				$(this).css({"border-bottom":"4px solid #f32613","color":"#f32613"});
				if(i==0){
					$(".title i").css({"right":"435px"})
					$(".usenameEnter").css({display:"block"});
					$(".phoneEnter").css({display:"none"});
					$(".banner_con_right").animate({
						height:"450px"
					},500);
				}else{
					$(".title i").css({"right":"205px"});
					$(".usenameEnter").css({display:"none"});
					$(".phoneEnter").css({display:"block"});
					$(".banner_con_right").animate({
						height:"480px"
					},500);
					
				}
				if($(".divDom")){
						$("div").removeClass("divDom");
					}
			})	
		});
	
	//文本框失去焦点
	$("#username").blur(function(){
		reg();
	});
	//点击登录按钮，进行后端验证
	$(".enter").click(function(){
		login();
	})
	
})

function reg(){
	//验证用户名发送ajax请求后端数据，验证用户名是否存在
	//1.前端先验证
	var userNameStr=$("#username").val();
	var regName=/^\w{3,15}/;
	if(!regName.test(userNameStr)){
		//创建一个元素显示到文本框中
		var divDom=$("<div>!请输入正确的用户名</div>");
		divDom.css({"position":"absolute","left":"250px","top":"5px","height":"40px","width":"150px","line-height":"40px","background":"pink","font-size":"14px","text-align":"center"});
		$(".text").append(divDom);
	}
}

function login(){
	$.ajax({
		type:"post",
		url:"enter.php",
		data:{
			"username":$("#username").val(),
			"userpass":$("#userpass").val()
		},
		success:function(data){
			if(data=="1"){
			//此时应该保存cookie，为进入主页，头部显示用户名
			location.href="index.html";
			}else{
				var divDom=$("<div>!用户名或密码错误</div>");
				divDom.css({"position":"absolute","left":"135px","top":"-25px","height":"40px","width":"200px","line-height":"40px","background":"pink","font-size":"14px","text-align":"center"});
				$(".usenameEnter").append(divDom);
			}
		}
	});
}
