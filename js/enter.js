
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
				}else{
					$(".title i").css({"right":"205px"});
					$(".usenameEnter").css({display:"none"});
					$(".phoneEnter").css({display:"block"});
				}
			})	
		});
		
	
})

