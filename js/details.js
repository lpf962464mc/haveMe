//发送AJAX获取商品详情
function getData(){
	$.ajax({
		type:"get",
		url:"getGoodsInfo.php",
		data:{
			"goodsId":"100"
		},
		dataType:"json",
		success:function(data){
			Data=data;
			showData(data);
		}
	});
}
//展示数据
function showData(data){
	$("#showImg").append("<img src='"+data.beiyong5+"'/><img src='"+data.beiyong6+"'/><img src='"+data.beiyong7+"'/><img src='"+data.beiyong8+"'/>")
	$(".center h3").html(data.goodsName);
	$(".center ul li").eq(0).children().eq(1).html(data.beiyong1);
	$(".center ul li").eq(1).children().eq(0).html(data.goodsPrice);
	$(".center ul li").eq(1).children().eq(1).html("(原售价："+data.goodsPrice+")");

	$(".center ul li").eq(6).children().eq(1).html(data.beiyong2);
	$(".center ul li").eq(6).children().eq(2).html(data.beiyong3);
	$(".center ul li").eq(6).children().eq(3).html(data.beiyong4);

	for(var i=0;i<8;i++){
		var liDom=$("<li><img src='"+data.beiyong9+"'><span>￥ 8.90</span></li>")
		$(".right_look ul").append(liDom);
	}
}
//加载
var Data=null;
$(function(){
	//获取收据
	getData();
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
	
	//点击购物车图标显示，购物车信息
	 goodsCar.getFun();
	 goodsCar.getFun1();
	 var imgDom=null;
	//创建放大镜
	$("#box").mouseenter(function(){
		if(!imgDom){
			imgDom=$("<img id='bigImg' src='"+ Data.goodsImg+"'/>");
			imgDom.css({
			"position":"absolute",
	        "left":"-50px",
	        "top":"-100px",
	        "width":"900px",
	        "height":"900px"
			});	
			$("#show").append(imgDom);
		}
	        bigMirror();
	})
	$("#box").mouseleave(function(){
		$("#show").remove("#bigImg");
	})
	 
});



//放大镜
 //显示放大镜和放大效果
function showBigMirror(){
	$("#bigMirror").css({display:"block"});
	$("#show").css({display:"block"});
}

//隐藏放大镜和放大效果
function hiddenBigMirror(){
	$("#bigMirror").css({display:"none"});
	$("#show").css({display:"none"});
}
function bigMirror(){
	
	$("#box").mouseenter (showBigMirror) ;
	$("#box").mouseleave (hiddenBigMirror);

	//放大镜的尺寸；
	let bigMirrorWidth  = 155;
	let bigMirrorHeight  = 155;
	$("#box").mousemove ((evt)=>{
		//一、放大镜跟着鼠标走
		
		//计算鼠标距离box左上角的位置
		var offset=$("#box").offset();
		let left = evt.pageX-parseInt(offset.left);//鼠标距离页面的横向距离-box距离页面的横向距离
		let top = evt.pageY-parseInt(offset.top);
		
		//计算放大镜的位置
		let bigMirrorLeft = left-bigMirrorWidth/2;
		let bigMirrorTop = top-bigMirrorHeight/2;
		
		//边界处理
		//if(left>=小图的宽度-放大镜的宽度){
		if(bigMirrorLeft>=$("#box").width()-$("#bigMirror").width()){
			bigMirrorLeft =$("#box").width()-$("#bigMirror").width();
		}else if(bigMirrorLeft<=0){
			bigMirrorLeft =0;
		}
		
		if(bigMirrorTop>=parseInt($("#box").height())-parseInt($("#bigMirror").height())){
			bigMirrorTop =parseInt($("#box").height())-parseInt($("#bigMirror").height());
		}else if(bigMirrorTop<=0){
			bigMirrorTop =0;
		}
		
		$("#bigMirror").css({left:bigMirrorLeft});
		$("#bigMirror").css({top:bigMirrorTop}) ;
		
		//二、大图的移动
		$("#bigImg").css({left:-3*bigMirrorLeft});
		$("#bigImg").css({top:-3*bigMirrorTop});
	});	
}

