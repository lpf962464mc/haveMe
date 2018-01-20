//轮播图
var slideShow=(function(){
//1、定义类
	function SlideShow(boxDom,width,height,imgs,timespace,btnWidth,btnHeight,btnColor,btnHighColor){
	//1）、属性
		this.boxDom = boxDom;
		this.width = width;
		this.height = height;
		//要播放的图片数组
		this.imgs = imgs;
		this.ord = 0;//代表当前图片的序号，从0开始。
		this.myTimer = null;
		this.timespace = timespace;
		
		//轮播图中的按钮
		this.btnWidth = btnWidth;
		this.btnHeight = btnHeight;
		this.btnColor = btnColor;//原始颜色
		this.btnHighColor = btnHighColor;//高亮颜色
		
	//2）、方法（函数）
	this.initUI = function(){
		//一、创建所有的HTML元素，并设置css样式		
		//1、创建img标记/a
		for(let i=0;i<this.imgs.length;i++){
			//1)、创建img对象
			let imgDom = document.createElement("img");
			imgDom.src = this.imgs[i];
			
			//2)、设置样式
			
			imgDom.style.cssText = "position:absolute;width:"+this.width+";height:"+this.height+"px;";
			//3)、添加到容器里
			this.boxDom.appendChild(imgDom);
		}
		
		//2、创建ul
		let ulDom = document.createElement("ul");
		
		ulDom.style.cssText = "position:absolute;bottom:60px;margin-left: 45%;";
		//3、创建li
		for(let i=0;i<this.imgs.length;i++){
			let liDom = document.createElement("li");
			liDom.style.cssText = "float:left;margin-right: 7px;";
			liDom.style.width=this.btnWidth+"px";
			liDom.style.height=this.btnHeight+"px";
			liDom.style.backgroundColor=this.btnColor;
			ulDom.appendChild(liDom);
		}
		//4、把ul添加到容器里
		this.boxDom.appendChild(ulDom);
		
		//二、初始化界面
		//1、把每张图片的透明度进行初始化
		let imgDoms = this.boxDom.children;
		imgDoms[0].style.opacity = 1;
		for(let i=1;i<imgDoms.length-1;i++){
			imgDoms[i].style.opacity = 0;
		}
		
		//第一按钮变成高亮
		let lis = this.boxDom.lastElementChild.children;
		lis[0].style.backgroundColor=this.btnHighColor;
	};
	
	//初始事件
	this.initEvent = function(){
		let obj = this;//把当前this保存到obj里。
		
		//鼠标进入盒子的区域，停止变换
		this.boxDom.onmouseover =function(){
			window.clearInterval(obj.myTimer);
		};	
		
		this.boxDom.onmouseout = function(){
			obj.autoChange();
		}		
		let lis = this.boxDom.lastElementChild.children;
		for(let i=0;i<lis.length;i++){
			//赋值语句。
			lis[i].onclick = function(){//此函数的执行必须点击li。
				obj.goImg(i);//
			}
		}
	}
	
	//1、自动变换图片
	this.autoChange=function(){		
		this.myTimer=setInterval(()=>{
				//处理两个数据：一个是要淡出的图片序号，一个是要淡入的图片序号。
				let outord = this.ord;//ord++之前的ord就是要出去的ord			
				//1、改变序号
				this.ord++;//4
				//2、处理边界
				if(this.ord>this.imgs.length-1){
					this.ord=0;
				}			
				//3、改变外观；
				this.changeUI(outord,this.ord);
			},this.timespace);
	};

	
	//功能：给定出的序号和进的序号，完成两张图片的淡入淡出效果
	this.changeUI=function(outord,inord){
		let currOpacity = 1;
		let incOpacity = -0.1;
		
		let imgs = this.boxDom.children; //document.getElementsByTagName("img");
		
		let myTimer = setInterval(function(){
			//1、改变数据
			currOpacity=currOpacity+incOpacity;//0.1
			//2、数据合法性的判断（边界）
			if(currOpacity<=0){  //
				window.clearInterval(myTimer);
			}
			//3、改变外观
			imgs[outord].style.opacity = currOpacity;	
			imgs[inord].style.opacity = 1-currOpacity;			
		},200);
				
		//2)、改变豆豆的背景颜色。
		let lis = this.boxDom.lastElementChild.children;
		//把所有的按钮变成橙色（初始颜色）
		for(let i=0;i<lis.length;i++){
			lis[i].style.backgroundColor = this.btnColor;
		}
		//把当前的变成红色
		lis[inord].style.backgroundColor=this.btnHighColor;
	};
	
	

	//3、跳转到指定的图片上
	this.goImg=function(transOrd){//0
		outord = this.ord;//ord改变之前的ord就是要出去的ord
		//1、改变序号（把当前图片序号ord的值改为跳转的图片序号；）
		this.ord = transOrd;
		//2、改变外观
		this.changeUI(outord,this.ord);
	};
	
}
	var instance;
	return {
		getInstance:function(boxDom,width,height,imgs,timespace,btnWidth,btnHeight,btnColor,btnHighColor){
			return instance=new SlideShow(boxDom,width,height,imgs,timespace,btnWidth,btnHeight,btnColor,btnHighColor);
		}
	}
})();

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


//加载
$(function(){
	//轮播图
	let s = slideShow.getInstance($("#banner_SlideShow")[0],"100%",585,["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg"],3000,64,5,"#7a6e6e","#39bdfb");
	s.initUI();
	s.initEvent();
	s.autoChange();
	
	let s1 = slideShow.getInstance($("#img5")[0],"200px",250,["img/1_05060006574070434_240.jpg","img/1_05228577980827121_240.jpg","img/1_05228593650117456_240.jpg","img/9_05015996424113082_240.jpg"],3000);
	s1.initUI();
	s1.initEvent();
	s1.autoChange();
	
	//滑过导航栏
	navHover.getFun($(".nav a"));
	
	//首页首行滑过
	HeaderHover.getFun();
	
	//滑过商品分类
 	hoverGoodsList.getFun();
 	//滑过头部
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
 	
//	$(".a").mouseleave(function(){
//		if($(this).hasClass("a")){
//			$(this).next().css({display:"none"});
//		}
//	});
//	

	
});

