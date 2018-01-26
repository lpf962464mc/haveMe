//加载
$(function(){
	//获取后端的商品
	for(var i=0 ;i<4; i++){
		getGoods();
	}
//	window.onscroll = function(){
//		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//		if(scrollTop>1000){
//			alert(1);
//		}
//	}
	//滑过导航栏
	navHover.getFun($(".nav a"));
	
	//首页首行滑过
	HeaderHover.getFun();
	
	//滑过商品分类
 	hoverGoodsList.getFun();
 	
	//滑过头部
	headerHover.getFun();

	
	//回到顶部
	ScrollTop.returnTop($("#returnTop"));
	ScrollTop.clickReturn($("#returnTop"));
	ScrollTop.overReturn($("#returnTop"));
	//滑过右边侧边栏
	ScrollTop.overFixedCon0($("#fixed_right_con ul li").eq(0));
	ScrollTop.overFixedCon1($("#fixed_right_con ul li").eq(1));
	ScrollTop.overFixedCon2($("#fixed_right_con ul li").eq(2));
	ScrollTop.overFixedCon3($("#fixed_right_con ul li").eq(3));
	
	//滑过限时折扣的导航
	hovePromotionNav.getFun();
	
	 
//	console.log($(".promotion_con_goodsList ").children().eq(0).height());
	
	
	 
	 
	
});

//功能函数

//滑过限时折扣的导航
var hovePromotionNav={
	getFun:function(){
		$(".first").nextAll().mouseenter(function(){
			$(".first").nextAll().children().css({"color":"#363531"});
			$(this).children().css({"color":"#d7210c"});
		})
	}
}

//滑过商品列表出现效果

//<div>
//	<ul>
//	
//		<li><img src="img/img1.jpg"/></li>
//		<li><a href="">海飞丝去屑洗发露怡神冰凉型洗发水 750ml 彻底去屑 头皮更清爽</a></li>
//		<li><span>促销价 </span><span>¥45.00</span>元 <span>↓直降：¥20.60</span></li>
//		<li><div><img src="img/star-on.png"/><img src="img/star-on.png"/><img src="img/star-on.png"/><img src="img/star-on.png"/><img src="img/star-on.png"/>
//			<p>官方自营</p></div><a href="">立即抢购</a>
//		</li>
//		<li><img src="img/default_user_portrait.gif"/><p><b>“</b>给老爹买的，还送货到老爹手上，服务棒棒的<b>”</b></p></li>
//	</ul>
//</div>
var hoverGoodsList={
	//商品名称效果
	getFun:function(){
		$(".change").mouseenter(function(){
			$(this).children().css({"overflow":"visible","color":"#c53827"});
			$(this).children().animate({
			"top":"-10px"
			},500);
		})
	},
	getFun1:function(){

		$(".change").mouseleave(function(){
			$(this).children().css({"overflow":"hidden","color":"#aeb1b8"});
			$(this).children().animate({
			"top":"0"
			},500);
		})
	},
	getFun2:function(){
		$(".promotion_con_goodsList div ul").mouseenter(function(){
			$(this).css({
				"border-color":"#CD000B",
				"box-shadow":"0 0 10px 3px #ccc"
			});
//			$(".changeImg").animate(function(){
//				"width":"110%",
//				"height":"110%"
//			},500);
		});
		$(".promotion_con_goodsList div ul").mouseleave(function(){
			$(this).css({
				"border-color":"#e6e6e6",
				"box-shadow":""
			});
//			$(".changeImg").animate(function(){
//				"width":"100%",
//				"height":"100%"
//			},500)
		});
	},
	getFun3:function(){
		$(".buy").mouseenter(function(){
			$(this).css({"background":"red"})
		});
		$(".buy").mouseleave(function(){
			$(this).css({"background":"#bf3c2a"})
		});
	}
};

//发送ajax获取商品
function getGoods(){
	$.ajax({
		type:"get",
		url:"getGoodsList.php",
		success:function(data){
			showData(data);
		},
		dataType:"json"
	});
}

//展示商品
//<div>
//	<ul>
//	
//		<li><img src="img/img1.jpg"/></li>
//		<li><a href="">海飞丝去屑洗发露怡神冰凉型洗发水 750ml 彻底去屑 头皮更清爽</a></li>
//		<li><span>促销价 </span><span>¥45.00</span>元 <span>↓直降：¥20.60</span></li>
//		<li><div><img src="img/star-on.png"/><img src="img/star-on.png"/><img src="img/star-on.png"/><img src="img/star-on.png"/><img src="img/star-on.png"/>
//			<p>官方自营</p></div><a href="">立即抢购</a>
//		</li>
//		<li><img src="img/default_user_portrait.gif"/><p><b>“</b>给老爹买的，还送货到老爹手上，服务棒棒的<b>”</b></p></li>
//	</ul>
//</div>
function showData(data){
	//父元素
	$box=$(".promotion_con_goodsList");
	for(var i=0;i<data.length;i++){
		//创建div
		var $divDom=$("<div></div>");
		$box.append($divDom);
		//创建ul
		var $ulDom=$("<ul></ul>");
		$divDom.append($ulDom);
		//创建li 1
		var $liDom1=$("<li></li>");
		var imgDom=$("<img class='changeImg' src='"+data[i].goodsImg +"'/>");
//		imgDom.css({scr:data[i].goodsImg});
		$liDom1.append(imgDom);
		$ulDom.append($liDom1);
		//创建li 2
		var $liDom2=$("<li class='change'></li>");
		var $aDom=$("<a href=''>"+data[i].goodsDesc +"</a>");
		$liDom2.append($aDom);
		$ulDom.append($liDom2);
		//创建li 3
		var $liDom3=$("<li><span>促销价</span><span>￥"+data[i].goodsPrice +"</span>元<span>↓直降：￥"+ data[i].beiyong2+"</span></li>");
		$ulDom.append($liDom3);
		//创建li 4
		var $liDom4=$("<li></li>");
		var $divIn=$("<div><img src='img/star-on.png'><img src='img/star-on.png'><img src='img/star-on.png'><img src='img/star-on.png'><img src='img/star-on.png'><p>"+data[i].beiyong3 +"</p></div><a href='#'class='buy'>立即抢购</a>");
		$liDom4.append($divIn);
		$ulDom.append($liDom4);
		//创建li 5
		var $liDom5=$("<li><img src='img/default_user_portrait.gif'><p>"+data[i].beiyong4 +"</p></li>");
		$ulDom.append($liDom5);
	}
	
	 //元素加载完毕实现瀑布流效果,
	 waterFall();
	
 	//滑过商品列表出现效果
	 	//商品名称效果
	 hoverGoodsList.getFun();
	 hoverGoodsList.getFun1();
	 hoverGoodsList.getFun2();
	 hoverGoodsList.getFun3();
}


function waterFall() {
	var wrap = $("#wrap");
	var water = wrap.children();
	var spaceWidth = water[0].offsetWidth; //获取子元素宽度(offsetWidth会获取块级元素的padding和border)
	var wrapWidth = wrap.width(); //获取外框元素宽度
	var colNum = Math.floor(wrapWidth / spaceWidth); //计算获取外框元素所能承受列数
	var column = new Array();
	var maxHeight = 0;
	for (var i = 0; i < colNum; i++) { //初始化数组来计算各列初始top值和left值
		column[i] = new Object();
		column[i].top = 0;
		column[i].left = spaceWidth * i ; //计算各列距离左侧距离
	}
	for (var i = 0; i < water.length; i++) { //遍历所有子元素及瀑布流布局
		//计算该子元素属于第几列
		if ((i+1) % colNum == 0) {
			sub = colNum;
		} else {
			sub = (i+1) % colNum;
		}
		_this = water;
		_this[i].style.position = "absolute";
		_this[i].style.top = column[sub - 1].top + "px";
		_this[i].style.left = column[sub - 1].left + "px";
		column[sub - 1].top += _this[i].offsetHeight; //计算各列最新高度以便赋值
	}
	for (var i = 0; i < colNum; i++) { //获取瀑布流整体布局高度
		if (column[i].top > maxHeight) maxHeight = column[i].top;
	}
	wrap.css({height:maxHeight}); //给外框元素赋值以防止出现子元素溢出外框元素
}