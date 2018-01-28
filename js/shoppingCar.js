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
	
	//购物车的商品选择
	//这个函数的作用是把一个复选框和很多复选框关联起来了。
    $("#checkAll").checkRelation($(".shoppingCar_list :checkbox"));
	
//	//改变商品的数量，金额
//	changeMoey();
	
});

jQuery.fn.extend({
    "checkAll":function (isChecked) {
        //this是jQuery对象
        this.each(function () {
            this.checked = isChecked;
        })
    },
    //全选的复选框和子复选框的关联
    "checkRelation":function ($sub) {
        $parent = this;
        //全选的功能（父控制子）
        this.click(function () {
            $sub.checkAll($parent[0].checked);
          //改变总金额
			totalMoney();
        });
        //联动（子控制父：子复选框有改变，那么父复选框也要有对应的改变）
        $sub.click(function () {
            //1、遍历所有的子复选框
            let isChecked = true;
            $sub.each(function () {
                if(this.checked==false){
                    isChecked = false;
                }
            })
            //2、改变父复选框的状态
            $parent[0].checked = isChecked;
//          //改变总金额
//			totalMoney();
        });
    }
});

function changeMoey(){
	$(".reduce").each(function(i){
		$(this).click(function(){
			var num=$(".num").eq(i).html();
			var price=$(".price").eq(i).html();
			if($(".num").eq(i).html()>1){
				num--;
				$(".num").eq(i).html(num);
			}
			//改变每个商品的需要的钱
			$(".money").eq(i).html(num*price);
//			//改变总金额
//			totalMoney();
		})
	})
	
	$(".add").each(function(i){
		$(this).click(function(){
			var num=$(".num").eq(i).html();
			var price=$(".price").eq(i).html();
			num++;
			$(".num").eq(i).html(num);
			//改变每个商品的需要的钱
			$(".money").eq(i).html(num*price);
			//改变总金额
			checkedDoodsTotalMoney();
		})
		
	})
}

//点击全选按钮计算总金额
function totalMoney(){
	var totalMoney=0;
//	 var obj=$("#total_money")[0].checked;
	 alert($("#total_money").attr(""))
//	if($("#total_money")[0].checked=="true"){
//		$(".money").each(function(i){
//		totalMoney+=parseInt($(".money").eq(i).html());
//		})
//		$("#total_money").html(totalMoney);
//	}
		
}

//计算选中商品的总金额
function checkedDoodsTotalMoney(){
	var totalMoney=0;
	$(".shoppingCar_list :checkbox").each(function(i){
		if(this.checked==true){
			totalMoney+=parseInt($(".money").eq(i).html());
		}
	})
	$("#total_money").html(totalMoney);
}
