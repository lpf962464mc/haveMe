////点击购物车图标显示，购物车信息
var goodsCar={
	getFun:function(){
		$("#shopingCar").mouseenter(function(){
			$("#goodsCar_con").css({display:"block"});
		})	
	},
	getFun1:function(){
		$("#goodsCar_con span").click(function(){
			$("#goodsCar_con").css({display:"none"});
		})
	}
};
//首页首行滑过
var HeaderHover={
	getFun:function(){
		$("#header_right a").mouseenter(function(){
//			$("#a").css({"display":"bolck"});

		});
	}
};

//滑过商品分类
var hoverGoodsList={
	getFun:function(obj){
	//滑过列表
		$(".banner_con_left ul li").each(function(i){
			//添加一个背景图片
			$(this).mouseenter(function(){
				
				var imgDom=$("<img>");
				imgDom.attr({src:"img/index_nav_arrow.png"});
				imgDom.css({position:"absolute","z-index":"100",left:"-15px"});
				imgDom.addClass("tempImage");
				$(this).append(imgDom);	
							
				//显示对应的内容
				$(".hoverList"+i).css({"display":"block"});
	 			//滑过商品列表
	 			$(".hoverList"+i).mouseenter(function(){
	 				$(".hoverList"+i).css({"display":"block"});
	 				$("img").remove(".tempImage");	
	 				
	 			});
	 			//鼠标离开对应区域
	 			$(".hoverList"+i).mouseleave(function(){
	 				isHover=false;
	 				$(".hoverList"+i).css({"display":"none"});
	 					//鼠标离开对应的区域，删除背景图片			
				});	
				
			});
			
			$(this).mouseleave(function(){
				$("img").remove(".tempImage");	
				$(".hoverList"+i).css({"display":"none"});
			});
			
		});
	}
};

//滑过导航栏
var navHover={
	getFun:function(obj){
		obj.mouseenter(function(){
			this.style.color="#4bc7df";
		});
		obj.mouseleave(function(){
			this.style.color="#333";
		});
	}
};


//滑过头部
var headerHover={
	getFun:function(){
		$(".a").each(function(i){
// 		var that=this;
 		$(this).mouseenter(function(){
 			
 			if(this!=that){
 				$(that).css({display:"none"});
 			}
 			
			$(".a"+i).css({display:"block"});
			$(".a"+i).mouseenter(function(){
				$(".a"+i).css({"display":"block"});
			})
			var that=this;
		});
		$(".a"+i).mouseleave(function(){
			$(this).css({display:"none"});
		})		
 	});
 		
 		$("#tit_mes li").mouseenter(function(){
 			$(this).children("div").css({display:"block"});
 			
 		})
 		$("#tit_mes li").mouseleave(function(){
 			$(this).children("div").css({display:"none"});
 		})
 	
 	
	}
}
 	
//滑过右边侧边栏
// var rightSideHover={
// 	getFun:function(){
// 		$("#fixed_right_con").mouseenter(function(){
// 			$(this).css({"background-position:left -450px"})
// 		})
// 	}
// }



var ScrollTop={

	//页面滚动500px出现返回顶部的按钮
	returnTop:function(obj){
		window.onscroll = function(){
//		var up = $(obj);
		//当前页面滚动的距离？？
		var _top = document.body.scrollTop || document.documentElement.scrollTop;
		if(_top >= 500){
			obj.css({"display":"block"});
			
			$("#leftFixed").css({"dispaly":"block"});
			//页面滚动500px,出现左侧的锚点链接
			$("#leftFixed").css({display:"block"});
		}else{
			obj.css({display:"none"});
				
			$("#leftFixed").css({"dispaly":"none"});
			//页面滚动500px,左侧的锚点链接消失
			$("#leftFixed").css({display:"none"});
			}
		}	
	},
	//点击返回顶部
	clickReturn:function(obj){
		obj.click(function(){
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		})
		
	},
	//滑过返回顶部改变背景
	overReturn:function(obj){
		obj.mouseover(function(){
			$(this).css({"background-position":"left -350px"});
			$(this).children().eq(0).css({"background-position":"left -350px"});
			$(this).children().eq(1).animate({left:-75},500)
		})
		obj.mouseleave(function(){
			$(this).children().eq(0).css({"background-position":"left -300px"});
			$(this).children().eq(1).animate({left:0},500,function(){})
		})
	},
	overFixedCon0:function(obj){
		obj.mouseover(function(){
//			$(this).css({"background-position":"left -50px"});
//			$(this).children().eq(0).css({"background-position":"left -50px"});
			$(this).children().eq(1).animate({left:-60},500)
		})
		obj.mouseleave(function(){
			$(this).children().eq(0).css({"background-position":"left 0"});
			$(this).children().eq(1).animate({left:40},500,function(){})
		})
	},
	overFixedCon1:function(obj){
		obj.mouseover(function(){
//			$(this).css({"background-position":"left -50px"});
			$(this).children().eq(0).css({"background-position":"left -50px"});
			$(this).children().eq(1).animate({left:-75},500)
		})
		obj.mouseleave(function(){
			$(this).children().eq(0).css({"background-position":"left 0"});
			$(this).children().eq(1).animate({left:40},500,function(){})
		})
	},
	overFixedCon2:function(obj){
		obj.mouseover(function(){
//			$(this).css({"background-position":"left -50px"});
			$(this).children().eq(0).css({"background-position":"left -150px"});
			$(this).children().eq(1).animate({left:-75},500)
		})
		obj.mouseleave(function(){
			$(this).children().eq(0).css({"background-position":"left -100PX"});
			$(this).children().eq(1).animate({left:40},500,function(){})
		})
	},
	overFixedCon3:function(obj){
		obj.mouseover(function(){
//			$(this).css({"background-position":"left -50px"});
			$(this).children().eq(0).css({"background-position":"left -250px"});
			$(this).children().eq(1).animate({left:-75},500)
		})
		obj.mouseleave(function(){
			$(this).children().eq(0).css({"background-position":"left -200PX"});
			$(this).children().eq(1).animate({left:40},500,function(){})
		})
	}

};
 