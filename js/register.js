

$(function(){
	
	$(".title span").each(function(i){
		$(this).click(function(){
				$(".title span").css({"border-bottom": "1px solid #e6e6e6","color":"#999999"});
				$(this).css({"border-bottom":"4px solid #f32613","color":"#f32613"});
				if(i==0){
					$(".title i").css({"right":"486px"})
					$(".phoneRegister").css({display:"block"});
					$(".numRegister").css({display:"none"});
				}else{
					$(".title i").css({"right":"185px"});
					$(".numRegister").css({display:"block"});
					$(".phoneRegister").css({display:"none"});
				}
		});
	});
	
	//点击立即注册，进行注册
	$("#numname").blur(function(){
		//进行前端正则验证
		reg();
		//进行后端验证用户名是否存在
		nameIsRepeat();
	});
	
	//点击立即注册，浏览器进行自动提交数据进行注册
	$("#numReg").click(function(){
		numRegister();
		
	});
});

//创建一个元素
function createDiv(obj){
	var divDom=$("<div>!请按规定格式输入</div>");
		divDom.css({"position":"absolute","left":"240px","top":"5px","height":"40px","width":"150px","line-height":"40px","background":"pink","font-size":"14px","text-align":"center"});
		obj.append(divDom);
}
function reg(){
	//验证用户名发送ajax请求后端数据，验证用户名是否存在
	//1.前端先验证
	var userNameStr=$("#numname").val();
	var regName=/^\w{3,15}/;
	if(!regName.test(userNameStr)){
		//创建一个元素显示到文本框中
		createDiv($("#li1"));
	}
}
//后端验证用户名是否存在
var usernameExists=true;
function nameIsRepeat(){
//	alert(1);
	 $.ajax({
                url:"usercheck.php",
                method:"get",
                data:{"username":$("#numname").val()},
                success:function (data) {
                    if(data=="0"){
                        usernameExists = false;//不存在
                    }else{
                        usernameExists = true;
						alert("用户名已存在");//存在
                    }
                }
            });
            
        $("#f").submit(function () {
        	if(usernameExists){
	            alert("亲，用户名已经存在");
	            return false;//阻止浏览器的默认行为。
        	}
    });
};

//注册
function numRegister(){
	$.ajax({
		type:"post",
		url:"regsave.php",
		data:{
			"username":$("#numname").val(),
			"userpass":$("#numpass").val()
			},
		success:function(t){
			if(t==1){
				location.href="index.html";
			}
			else{
				alert("注册失败")
			}
		}
	});
}

 
 

 