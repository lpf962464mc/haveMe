//点击商标列表进行跳转
var num=0;
function hoverTrademarkList(){
	$(".trademarkList ul li").each(function(i){
		$(this).click(function(){
			//将对应的内容显示
			$(".trademarkList_"+i).css({display:"block"});
			$(this).css({background:"#da3700",color:"white"});
			//将之前的显示的内容隐藏
			if(num!=i){
				$(".trademarkList_"+num).css({display:"none"});
				$(".trademarkList ul li").eq(num).css({background:"#fafafa",color:"#2d3834"});
				num=i;
			}
		})
	})
}


//加载
$(function(){
	
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
	//点击商标列表进行跳转
	hoverTrademarkList();
	
	//点击购物车图标显示，购物车信息
	 goodsCar.getFun();
	 goodsCar.getFun1();
	 
});

