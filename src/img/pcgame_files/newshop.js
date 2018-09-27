(function($) {
$.extend({       
urlGet:function()
{
    var aQuery = window.location.href.split("#");  //取得Get参数
    var aGET = new Array();
    if(aQuery.length > 1)
    {
        var aBuf = aQuery[1].split("&");
        for(var i=0, iLoop = aBuf.length; i<iLoop; i++)
        {
            var aTmp = aBuf[i].split("=");  //分离key与Value
            aGET[aTmp[0]] = aTmp[1];
        }
     }
     return aGET;
 }
});

})(jQuery);
$("#pro_packageid").val("");



//选项卡切换
function setTab(name,cursel,n,src)
{
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		//当ID存在时，执行下去
		if(menu)
			menu.className=i==cursel?"selected":"";
			
		//当ID存在时，执行下去
		if(con){
			if(i==cursel){
				con.style.display="block";
				//con里的图片缓加载
				if(src && src=="data-tb-original"){
					var el = con.getElementsByTagName('img'); 
					for (var j = 0, len2 = el.length; j < len2; j++) { 
						if (typeof(el[j]) == "object" && el[j].getAttribute("data-tb-original"))
						{ 
							el[j].src = el[j].getAttribute("data-tb-original"); 
						}
					}
				}
				
			}else{
				con.style.display="none";
			}
		}
	}
}

 



 function getdaohuonum()
 {
    $.ajax({   
	 type:"GET",
	 async:false,
	 url: "/products/dhshow",
	 data:{products_id:commodity_json[products_id][""]["pid"]},
	 dataType:"jsonp",
	 jsonp : 'callback', 
	 jsonpCallback:"success_jsonpCallback",
	 success: function(json){ 
				     $(".pro-daohuo-show").html("已有"+json[0].num+"人预约");
	 },error:function(){}

 	});	
 }
 /*显示销量*/
  function xl_show()
  {  
      
    if(typeof(open_xl)!="undefined")
	{
	   if(open_xl==1){
		$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/products/xl_show",
		 data:{"open_xl":open_xl,"pid":products_id},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 
				  $(".pro-price").append(" 销量:"+json[0].num);
		 },error:function(){
		  }
		});	
		}
	}
  }

//选项卡切换
function setTabN(name,cursel,n,src)
{
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		//当ID存在时，执行下去
		if(menu)
			menu.className=i==cursel?"selected":"";
			
		//当ID存在时，执行下去
		if(con){
			if(i==cursel){
				$(".shop-content-qh-menu").removeClass("tb-tabbar-wrap-sticky"); 
				con.style.display="block";
				$("html,body").animate({scrollTop: $("#shop-content-qh-menu").offset().top});
				
				//con里的图片缓加载
				if(src && src=="data-tb-original"){
					var el = con.getElementsByTagName('img'); 
					for (var j = 0, len2 = el.length; j < len2; j++) { 
						if (typeof(el[j]) == "object" && el[j].getAttribute("data-tb-original"))
						{ 
							el[j].src = el[j].getAttribute("data-tb-original"); 
						}
					}
				}
				
			}else{
				con.style.display="none";
			}
		}
	}
}


//TV特殊选项卡切换
function setTabTV(name,cursel,n,src)
{
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		//当ID存在时，执行下去
		if(menu)
			menu.className=i==cursel?"current_"+i:"";
			
		//当ID存在时，执行下去
		if(con){
			if(i==cursel){
				con.style.display="block";
				//con里的图片缓加载
				if(src && src=="data-tb-original"){
					var el = con.getElementsByTagName('img'); 
					for (var j = 0, len2 = el.length; j < len2; j++) { 
						if (typeof(el[j]) == "object" && el[j].getAttribute("data-tb-original"))
						{ 
							el[j].src = el[j].getAttribute("data-tb-original"); 
						}
					}
				}
			}else{
				con.style.display="none";
			}
		}
	}
}



//内页-看了又看切换	
function content_look(){
	
	var $obj = $(".shop-content-gd-look");
	var len  = $obj.length;
	var i = 0;
	
	 $("#shop-content-look-bottom").click(function(){
		  i++;
		  if(i==len){
			i = 0;
		  }
		  $obj.stop(true,true).hide().eq(i).show();
		  return false;
	 });	
	 $("#shop-content-look-top").click(function(){
		  i--;
		  if(i==-1){
			i = len-1;
		  }
		  $obj.stop(true,true).hide().eq(i).show();
		  return false;
	 });
}

function getCookie(c_name){
	 if (document.cookie.length>0){
		   c_start=document.cookie.indexOf(c_name + "=")
		   if(c_start!=-1){ 
			   c_start=c_start + c_name.length+1;
			   c_end=document.cookie.indexOf(";",c_start);
		   if (c_end==-1)c_end=document.cookie.length;
			   return unescape(document.cookie.substring(c_start,c_end));
		   } 
	 }
	 return"";
}

//产品信息修改
function commodity_f5(attr_value_id){
	$(".add").attr("data-disabled","0");
	$("#content_num_txt").removeAttr("readonly");
	var status=1;
	var cookie_from_where = getCookie("from_where");
	
	if(commodity_json[products_id][attr_value_id]['showbtn']){
    	   var jjgArr=commodity_json[products_id][attr_value_id]['showbtn'].split("@@");
    	   $("#jig_link").attr("class",jjgArr[0]);
    	   $("#jig_link").attr("href","/discount/"+jjgArr[1]+"/");
    }
	
	if(commodity_json[products_id][attr_value_id]['old_price'] > 0){

		if(commodity_json[products_id][attr_value_id]['old_price']==commodity_json[products_id][attr_value_id]['price']){
            $("#p_old_price").html('建议零售价：'+commodity_json[products_id][attr_value_id]['old_price']).hide();	
		}else{
			$("#p_old_price").html('建议零售价：'+commodity_json[products_id][attr_value_id]['old_price']).show();	
		}
	 	
	}else{
		$("#p_old_price").html('');
	}
	
	if(commodity_json[products_id][attr_value_id]['zk'] > 0){
		//$("#p_zhekou").html(commodity_json[products_id][attr_value_id]['zk']+'折');	
		$("#p_zhekou").hide();
	}else{
		$("#p_zhekou").html('');
		$("#p_zhekou").hide();
	}
	
	
	$("#pro_pid").val(commodity_json[products_id][attr_value_id]['pid']);
	$("#commodity_lx").val(commodity_json[products_id][attr_value_id]['type']);
    if(commodity_json[products_id][attr_value_id]['state']==4){
	$("#commodity_lx").val(2);
	}
	$("#pro_kucun_contain").show();
	$("#pro_kucun").html(commodity_json[products_id][attr_value_id]['num']);
	$("#pro_img_src").attr("src",commodity_json[products_id][attr_value_id]['img']);
	
	if(commodity_json[products_id][attr_value_id]['express_id']==0){
		pro_express = 0;
		content_express_price(0,content_mr_express_id,content_mr_sid);
		
	}else{
		pro_express = 1;
		//快递模版赋值
		content_mr_express_id = commodity_json[products_id][attr_value_id]['express_id'];
		
		
		content_express_price(pro_express,content_mr_express_id,content_mr_sid);
	}
	
 
	
	if(commodity_json[products_id][attr_value_id]['num']<1){
		//$("#shop_content_buy,#shop_content_addcar").hide();
		//$(".pro-daohuo").hide();
		//$("#shop_content_no_buy").html('已售罄');
		//$("#shop_content_no_buy").show();
		//$("#pro_pid").val('');
	}else if(commodity_json[products_id][attr_value_id]['state']==0){
		$("#shop_content_buy,#shop_content_addcar").hide();
		$(".pro-daohuo").hide();
		$("#shop_content_no_buy").html('已售罄');
		status=0;
		$("#pro_kucun_contain").show();
		  $("#pro_kucun").html(0);
		$("#shop_content_no_buy").show();
		$("#pro_pid").val('');
	}else if(commodity_json[products_id][attr_value_id]['state']==3){
		$(".kygm").hide();
		$(".pro-daohuo").attr("onclick","shop_dhtz();");
		$(".pro-daohuo").show();
		
	}else if(commodity_json[products_id][attr_value_id]['state']==4){
	     	$("#shop_content_addcar").hide();
			$(".add").attr("data-disabled","1");
			 $("#content_num_txt").val(1);
			 $("#content_num_txt").attr("readonly","true");
			 $("#shop_content_buy").show();
			 $("#shop_content_no_buy").hide()
	}
	else {
		$(".pro-daohuo").removeAttr("onclick");
		$(".pro-daohuo").hide();
		
		$("#shop_content_buy,#shop_content_addcar").show();
		$("#shop_content_no_buy").hide();	
	}
	
	
	
	//分销价格判断 以及 状态判断
	if(cookie_from_where && typeof(union_price_type)!="undefined")
	{
	
 
		if(union_price_type[cookie_from_where]){
			if(union_price_type[cookie_from_where]['pricetype']==2){
				if(commodity_json[products_id][attr_value_id]['union_price']!="0.00"){
			      $("#pro_price").html(commodity_json[products_id][attr_value_id]['union_price']);
			    }else $("#pro_price").html(commodity_json[products_id][attr_value_id]['price']);
		    }else{
				$("#pro_price").html(commodity_json[products_id][attr_value_id]['price']);
			}
		}else{
			$("#pro_price").html(commodity_json[products_id][attr_value_id]['price']);
		}
		
	}else{
	      price = commodity_json[products_id][attr_value_id]['price'];
	     if(price=="0")
		 {
		   price="未公布";
		 } 
		$("#pro_price").html(price);
	}
	
	if(commodity_json[products_id][attr_value_id]['pid'] && status>0  ){
	    $.ajax({   
		 type:"GET",
		 async:false,
		 url: "/products/kucun",
		 data:{"pid":commodity_json[products_id][attr_value_id]['pid']},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 
				  if(json[0].num<1){
					$("#shop_content_buy,#shop_content_addcar").hide();
					$(".pro-daohuo").hide();
					$("#shop_content_no_buy").html('已售罄');
					$("#shop_content_no_buy").show();
					$("#pro_pid").val('');
					$("#pro_kucun").html(0);
					
				  }
		          $("#pro_kucun_contain").show();
				  $("#pro_kucun").html(json[0].num);
		 },error:function(){
		  }
		});	
	}
	
	
	if(commodity_json[products_id][attr_value_id]['type']==3)
	{
	     $("#shop_content_addcar").hide();
		 $("#shop_num").show();
		 $("#shop_content_buy").html("立即购买")
	}
	if(commodity_json[products_id][attr_value_id]['type']==4)
	{
	     $("#shop_content_addcar").hide();
		 $("#shop_num").hide();
		 $("#shop_content_buy").html("立即充值")
	}
	
}

//产品信息修改
function commodity_f5_dg(){
	var cookie_from_where = getCookie("from_where");
	var c_dg_pid = $("#pro_pid").val();
	
	$(".add").attr("data-disabled","0");
	$("#content_num_txt").removeAttr("readonly");
	
	
	if(commodity_json[products_id]['']['old_price'] > 0){
		// $("#p_old_price").html('建议零售价：'+commodity_json[products_id]['']['old_price']);	
	}else{
		$("#p_old_price").html('');
	}
	
	if(commodity_json[products_id]['']['zk'] > 0){
		//$("#p_zhekou").html(commodity_json[products_id]['']['zk']+'折');	
		$("#p_zhekou").hide();
	}else{
		$("#p_zhekou").html('');
		$("#p_zhekou").hide();
	}
	
 
	if(commodity_json[products_id]['']['state']==0){
		$("#shop_content_buy,#shop_content_addcar").hide();
		$("#shop_content_no_buy").html('已售罄');
		$("#pro_kucun_contain").show();
		  $("#pro_kucun").html(0);
		$("#shop_content_no_buy").show();
		$("#pro_pid").val('');
	}else if(commodity_json[products_id]['']['state']==3){
	    getdaohuonum();
		$(".kygm").hide();
		$(".pro-daohuo").attr("onclick","shop_dhtz();");
		$(".pro-daohuo").show();

		if(commodity_json[products_id]['']['num']<1){
			//$("#shop_content_buy,#shop_content_addcar").hide();
			//$("#shop_content_no_buy").html('已售罄');
			//$("#shop_content_no_buy").hide();
		}
	}else if(commodity_json[products_id]['']['state']==4){
	     	$("#shop_content_addcar").hide();
			$(".add").attr("data-disabled","1");
			 $("#content_num_txt").val(1);
			 $("#content_num_txt").attr("readonly","true");
	}
	
	
	
	//分销价格判断
	if(cookie_from_where && typeof(union_price_type)!="undefined")
	{
		
		if(union_price_type[cookie_from_where]){
			  if(union_price_type[cookie_from_where]['pricetype']==2){
			  	   if(commodity_json[products_id][""]['union_price']!="0.00"){
				      $("#pro_price").html(commodity_json[products_id][""]['union_price']);
				   }else $("#pro_price").html(commodity_json[products_id][""]['price']);
			  }else $("#pro_price").html(commodity_json[products_id][""]['price']);
		}
	}
	
	
	if(commodity_json[products_id][""]['pid']){
	    $.ajax({   
		 type:"GET",
		 async:false,
		 url: "/products/kucun",
		 data:{"pid":commodity_json[products_id][""]['pid']},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 
				  if(json[0].num<1){
					 $("#shop_content_buy,#shop_content_addcar").hide();
					 $("#shop_content_no_buy").show();
			         $("#shop_content_no_buy").html('已售罄');
			         $("#pro_kucun_contain").show();
					 $("#pro_kucun").html(0);
			   
					
				  }
				  $("#pro_kucun").html(json[0].num);
		 },error:function(){
		  }
		});	
	}
	
	
	if(commodity_json[products_id]['']['type']==3){
	     $("#shop_content_addcar").hide();
		 $("#shop_num").show();
		 $("#shop_content_buy").html("立即购买")
	}
	if(commodity_json[products_id]['']['type']==4){
	     $("#shop_content_addcar").hide();
		 $("#shop_num").hide();
		 $("#shop_content_buy").html("立即充值")
	}

}


//内页快递归属地加载
function content_ip_address_onload()
{
	$.ajax({   
	 type:"GET",
	 async:false,
	 url: "/products/address_onload",
	 data:{products_id:products_id},
	 dataType:"jsonp",
	 jsonp : 'callback', 
	 jsonpCallback:"success_jsonpCallback",
	 success: function(json){ 
					
		if(json[0].str==1){
			$("#select_express").html(json[0].region);	
			//快递省赋值
			content_mr_sid = json[0].region_id;
			content_express_price(pro_express,content_mr_express_id,content_mr_sid);
			
		}else{
			$("#select_express").html('上海');	
			content_express_price(pro_express,content_mr_express_id,content_mr_sid);
		}
					
	 },error:function(){}

 	});	

}


//内容页面快递价格计算
function content_express_price(tp,kd_id,sid)
{
   // console.log(kd_id);
	if(tp==0){
		$("#shop_express_str").html('快递：0.00');	
		$("#shop_express_str_ems").html('EMS：0.00');
	}else{
		if(express_json[kd_id]['kd'][sid]){
			$("#shop_express_str").html('快递：'+express_json[kd_id]['kd'][sid]['sf']+'.00');
		}else{
			$("#shop_express_str").html('快递：'+express_json[kd_id]['kd']['000000']['sf']+'.00');
		}
		
		if(express_json[kd_id]['ems'][sid]){
			$("#shop_express_str_ems").html('EMS：'+express_json[kd_id]['ems'][sid]['sf']+'.00');	
		}else{
			$("#shop_express_str_ems").html('EMS：'+express_json[kd_id]['ems']['000000']['sf']+'.00');
		}
		
		
	}
}

//内容页面快递价格计算
function content_express_taocan_price(tp,kd_id,sid)
{
   // console.log(kd_id);
	if(tp==0){
		if(express_json[kd_id]['kd'][sid]){
			return kd_fee=express_json[kd_id]['kd'][sid]['sf']+'.00';
		}else{
			return kd_fee=express_json[kd_id]['kd']['000000']['sf']+'.00';
		}
	}else{		
		if(express_json[kd_id]['ems'][sid]){
			return ems_fee=express_json[kd_id]['ems'][sid]['sf']+'.00';
		}else{
			return ems_fee=express_json[kd_id]['ems']['000000']['sf']+'.00';
		}
	}
}


 /*数量+1*/
function content_numAdd(){
	var jj_id = $("#pro_pid").val();
	var jj_num = $("#pro_kucun").html();
	var state  = $(".add").attr("data-disabled");
	
	if(state=="1") {
	  alert("定金商品只支持单件购买");
	  $("#content_num_txt").val(1);
	   return false;
	}
	
	if(jj_id==""){
		content_sub_null();
		return;
	}	
	
	
	var num_add = parseInt($("#content_num_txt").val())+1;
	
	if($("#content_num_txt").val()==""){
		num_add = 1;
	}
 
	if(num_add>jj_num){
		num_add = num_add-1;
	}

 	$("#content_num_txt").val(num_add);
} 


 /*数量-1*/
function content_numDec(){

	var jj_id = $("#pro_pid").val();
	var jj_num = $("#pro_kucun").html();
	
	if(jj_id==""){
		content_sub_null();
		return;
	}		

	var num_dec = parseInt($("#content_num_txt").val())-1;
	
	if(num_dec<1){
		return;
	}else{
		$("#content_num_txt").val(num_dec);
	}
} 

/*内页提交判断*/
function content_sub_null(){
	$("#content_sub_is_null").addClass("pro-list-div-ts-cc");	
}

/*内页关闭*/
function content_sub_null_close(){
	$("#content_sub_is_null").removeClass("pro-list-div-ts-cc");			
}

//内页参数默认选中
function content_default_selected()
{
     xl_show();
	if(pro_attr_type_num==1){
		if(attrone){
			$("#pro_attrone_"+attrone+"").addClass("tb-selected");
			newshop_content_attr_1 = $("#pro_attrone_"+attrone+"").attr('data-attr-id');
			if(newshop_content_attr_1){
				commodity_f5(newshop_content_attr_1);
			}
		}	
	}	
	
	if(pro_attr_type_num==2){
		if(attrone && attrtwo){
			$("#pro_attrone_"+attrone+"").addClass("tb-selected");
			$("#pro_attrtwo_"+attrtwo+"").addClass("tb-selected");
			newshop_content_attr_1 = $("#pro_attrone_"+attrone+"").attr('data-attr-id');
			newshop_content_attr_2 = $("#pro_attrtwo_"+attrtwo+"").attr('data-attr-id');
			
			if(newshop_content_attr_1 && newshop_content_attr_2){
				commodity_f5(newshop_content_attr_1+","+newshop_content_attr_2);
			}
		}	
	}	
	
	if(pro_attr_type_num==0){
		commodity_f5_dg();	
	}
		// shuang_temp();

}

function shuang_temp(){
	var shuangcid=new Array(999999999999,1311,1310,1316,1313,1312,1309,1314,1320,1306,1329,1330,1333,1315,1331,1325,1326,1317,1321,1327,1328,1308,1332,1322,1334,1318,1319,1323,1324,244,1,19,10,243,5,999,402,13,1108,274,1178,241,466,1135,1106,246,1177,549,1203,57,1030,462,397,17,1270,1007,343);
	var shuangcidindex = $.inArray(products_id, shuangcid);
	if (shuangcidindex>0)
	{
		$("#p_zhekou").html('<a href="http://www.fhyx.com/zt/yd2016/" target="_blank"><img src="/public/images/sd_ny.png"></a>');
		$("#p_zhekou").show();
	}
}
//留言反馈
function feedback_ajax()
{		
	var content = $("#ali213-feedback-content").val();
	var tel = $("#ali213-feedback-tel").val();
	
	if(content==""){
		$("#new-ali213-feedback-error").html('反馈内容不能为空');
		return false;
	}
	
	if(tel==""){
		$("#new-ali213-feedback-error").html('请填写您的联系方式，方便我们与您联系');
		return false;
	}
		
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/products/msgbook",
		 data:{
			content:content,
			tel:tel
		 },
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 
						
			if(json[0].str==1){
				$("#new-ali213-feedback-error").html('请填写反馈内容');
			}
			
			if(json[0].str==2){
				$("#new-ali213-feedback-error").html('短时间内请勿重复提交!');		
			}
			
			if(json[0].str==3){
				$("#new-ali213-feedback-error").html('<font color="blue"><b>反馈成功!</b></b>');	
				
				setTimeout("close_feedback()",1000);
			}
						
						
		 },error:function(){}
	 });

}

//关闭反馈
function close_feedback(){
	$("#new-ali213-feedback").css('display','none');
	$("#ali213-feedback-content").val('');
	$("#new-ali213-feedback-error").html('');
}


//收藏人数加载
function content_collection_onload()
{
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/products/collection_load",
		 data:{pid:products_id},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==1){
				$("#content_collection_num").html('0');
			}
			if(json[0].str==2){
				$("#content_collection_num").html(json[0].num);
			}	
			if(json[0].str==3){
				$("#content_shoucang_button").html('<span class="ali-header-ico my-shoucang-content"></span><span style="float:left;">已经收藏</span>');
				$("#content_shoucang_button").removeAttr("id");
			}
			
		 },error:function(){}
	
	 });
}

//收藏商品
function content_collection_add()
{
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/products/collection_add",
		 data:{pid:products_id},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==2){
				$("#content_shoucang_button").html('<span class="ali-header-ico my-shoucang-content"></span><span style="float:left;">收藏成功</span>');
			}	
		 },error:function(){}
	
	 });
}

//加入购物车
function content_add_car(pid,pnum)
{
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/car/add",
		 data:{pid:pid,pnum:pnum},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==2){
				$("#shop-car-success-position").show();
				shop_login_car();
			}	
		 },error:function(){}
	
	 });
}

//购物车加载
function shop_car_onload()
{
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/car/onload",
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==2){
				$("#shop-car-box-onload").html(json[0].html);
			}	
		 },error:function(){}
	
	 });		
}

//购物车结算按钮的隐藏与显示
function car_sub_dis()
{
	if(car_id_array=='' && car_id_array2==''){
		$("#car_sub_button").attr("class","car-submit-no")	
	}else{
		$("#car_sub_button").attr("class","car-submit")	
	}
}


//低价换购加入购物车
function car_add_car(pid,pnum)
{
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/car/add",
		 data:{pid:pid,pnum:pnum},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==2){
				shop_car_onloadnew();
				shop_login_car();
			}	
		 },error:function(){}
	
	 });
}


 /*数量+1*/
function car_numAdd(num){
 var num_add = parseInt($("#content_num_txt_"+num+"").val())+1;
 if($("#content_num_txt_"+num+"").val()==""){
  num_add = 1;
 }
 
var kucun = $("#kucun_"+num+"").val();
if(num_add>kucun){
	num_add = num_add-1;
}

 $("#content_num_txt_"+num+"").val(num_add);
 var total = parseFloat($("#price_"+num+"").val())*parseInt($("#content_num_txt_"+num+"").val());
 $("#totalPrice_"+num+"").html(total.toFixed(2));
 
 money_sum();
 
} 

function in_array(needle, haystack, argStrict) {
  //  discuss at: http://phpjs.org/functions/in_array/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: vlado houba
  // improved by: Jonas Sciangula Street (Joni2Back)
  //    input by: Billy
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //   example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
  //   returns 1: true
  //   example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
  //   returns 2: false
  //   example 3: in_array(1, ['1', '2', '3']);
  //   example 3: in_array(1, ['1', '2', '3'], false);
  //   returns 3: true
  //   returns 3: true
  //   example 4: in_array(1, ['1', '2', '3'], true);
  //   returns 4: false

  var key = '',
    strict = !! argStrict;

  //we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] == ndl)
  //in just one for, in order to improve the performance 
  //deciding wich type of comparation will do before walk array
  if (strict) {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack[key] == needle) {
        return true;
      }
    }
  }

  return false;
}
 /*数量-1*/
function car_numDec(num){
 var num_dec = parseInt($("#content_num_txt_"+num+"").val())-1;
 if(num_dec<1){
 }else{
  $("#content_num_txt_"+num+"").val(num_dec);
  var total = parseFloat($("#price_"+num+"").val())*parseInt($("#content_num_txt_"+num+"").val());
  $("#totalPrice_"+num+"").html(total.toFixed(2));
  money_sum();
 }
} 

function money_sum(){
    
	var sum = 0;
	var num = 0;
	$('.products_num_money').each(function(k,v){
		sum = sum+parseFloat($(v).text());
	});
	
	$('.car-num-js').each(function(k,v){
		num = num+parseFloat($(v).val());
	});
	
	/*获取选择的商品id*/
	 
	 var myArray = new Array();  
	 $i=0;
	$('.products_num_money').each(function(index,v){
		 $id = $(v).attr("id").replace("totalPrice_","");
		 pnums=$("#content_num_txt_"+$id).val();
		 
		 for(j=0;j<pnums;j++){
		   myArray[$i]=$id;
		   $i++;
		 }

	});
    if(myArray.length>0)
	{
	   zhuji_id_arr = zhuji_id_str.split(",");
       $act = 0;
       $bd = 0;	   
	   for(i=0;i<myArray.length;i++)
	   {
	       value = myArray[i];
          	  if(value==802 || value==801  || value==140 || value==141 || value==795 || value==796  || value==193  || value==194  || value==195  || value==150 || value==151   )
			  {
			    $act=1; 
			  }
			  if(in_array(value,zhuji_id_arr))
			  {
			    $bd = $bd+1;
			  }
			  
	   }
	 
	    if($act && $bd)
		{
			if($bd==1){
				act_p = 5;
			}
			if($bd==2){
				act_p = 15;
			}
			if($bd==3){
				act_p = 30;
			}
			if($bd>=4){
				act_p = 50;
			}
			sum = sum-act_p;
			sum = sum +" (活动优惠"+act_p+")";
		}
	


	   
	   
	}
 	

	
	
	$("#products_sum_num").html(num);
	$("#products_sum_money").html(sum);
}

//购物车删除-单个
function shop_car_delete(cid)
{
	if(confirm("确认删除吗?")){
	
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/car/delete",
		 data:{cid:cid},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==2){
				shop_car_onload();
				shop_login_car();
			}	
		 },error:function(){}
	
	 });		
	
	}
}


//购物车删除-多选
function car_all_delete()
{
	if(confirm("确认删除吗?")){
	
	if(car_id_array=="" && car_id_array2==""){
		alert('您还没有选中任何商品');
		return;
	}
	
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/car/deleteall",
		 data:{car_id_array:car_id_array,car_id_array2:car_id_array2},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==2){
				shop_car_onload();
				shop_login_car();
			}	
		 },error:function(){}
	
	 });		
	
	}
}

//收货地址加载
function shop_address_onload()
{
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/auction/address_onload",
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==2){
				$("#shop_buy_address_select").html(json[0].html);
			}
			
			if(json[0].str==3){
				$("#shop_buy_address_select").html(json[0].html);
			}	
				
		 },error:function(){}
	
	 });		
}


//登录&购物车加载
function shop_login_car()
{
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/header/onload",
		 data:{from_where:get_from},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==2){
				$("#shop_login_box").html(json[0].loginhtml);
				$("#gwc_num").html(json[0].carnum);
			}
				
		 },error:function(){}
	
	 });			
}


//快递地区计算
function express_type_post(type){
	var sid = $("input[name='address_id']:checked").attr("data-sid");
	if(type){
		var express_type = type;
	}else{
		var express_type = 	$("input[name='express_type']:checked").attr("data-type");
	} 
	type  = express_type;
	
	if(type=="kd"){$("#shop_order_zj_box_kdname").html('(中通快递)');}
	if(type=='sf'){ 
	 $("#shop_order_zj_box_kdname").html('');
	 $("#shop_order_zj_box_yunfei").html('<font color="red"><b>(顺丰运费到付)</b></font>');
	}
	if(type=='ems'){$("#shop_order_zj_box_kdname").html('(EMS)');}
	
	if(sid  ){
		
		for(i=1;i<=order_p_num;i++){
			var products_kd = $("#p_express_"+i+"").val();
			var products_shu = $("#p_num_"+i+"").val();
			var products_jiage = $("#p_price_"+i+"").val();
			
			var money = buy_express_price(products_jiage,products_shu,products_kd,sid,express_type);
			
			var money_arr= new Array();
			money_arr=money.split("&&&");
			
			$("#products_money_"+i+"").html(money_arr[0]);
			
			if(money_arr[1]!="null"){
				if(express_type=="sf"){
					$("#products_money_yf_"+i+"").html('运费：0(到付)');
					$("#products_money_yf_jsz_"+i+"").val('0');
				}else{
					$("#products_money_yf_"+i+"").html('运费：'+money_arr[1]+'');	
					$("#products_money_yf_jsz_"+i+"").val(''+money_arr[1]+'');
				}
			}	
		}	
		money_sum_order(type);
	}
	
}

//优惠券码使用
function use_coupon_code_sub()
{
	var coupon_code_m = $("#use_coupon_code_txt").val();
	var coupon_code_pidstr = $("#use_coupon_code_pidstr").val();
	
	if(coupon_code_m==""){
		$("#use_coupon_code_error").html('请输入您的优惠券兑换码');	
		return false;
	}
	if(coupon_code_m.length!=16){
		$("#use_coupon_code_error").html('优惠券兑换码错误');	
		return false;	
	}
	
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/auction/coupon_code",
		 data:{coupon_code_m:coupon_code_m,pidstr:coupon_code_pidstr},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==1){
				$("#use_coupon_code_error").html(json[0].html);			
			}else{
				$("#use_coupon_code_error").html('使用成功！');
				$("#select_coupon_price_id").val('0');
				$("#coupon_is_type").val('2');
				$("#use_coupon_code_id_hidden").val(''+json[0].logid);
				$("#use_coupon_code_hidden").val(''+coupon_code_m);
				coupon_price_edit(json[0].price,2);
			}	
		 },error:function(){}
	
	 });		
}


//优惠券同步价格修改
function coupon_price_edit(this_value,tp)
{
	var coupon_s_type = $("input[name='use_coupon_type']:checked").val();
	var c_price_yuanshi = $("#commodity_price_yuanshi").val();
	var c_price_yuanshi_tc = $("#commodity_price_yuanshi_tc").val();

	if(c_price_yuanshi_tc){
		zj=parseFloat(c_price_yuanshi_tc-this_value).toFixed(2);
		zj1=parseFloat(c_price_yuanshi_tc-this_value).toFixed(2);
	}else{
		zj=parseFloat(c_price_yuanshi-this_value).toFixed(2);
		zj1=parseFloat(c_price_yuanshi-this_value).toFixed(2);
	}
	if(zj<0){
	   zj = zj1 = 0;
	}
	 $("#products_order_sum_money").html(zj);
	 $("#shop_order_zj_box_paymoney").html(zj1);
	
	
	all_coupon_price = this_value;
	
	if(tp==1){
		var error_wz = '优惠券';	
	}else{
		var error_wz = '优惠券兑换码';
	}
	
	if(this_value==0){
		$("#youhuijuan_tishi").html('');	
		$("#youhuijuan_tishi").hide();
		$("#shop_order_zj_box_youhui").html('0.00');
	}else{
		$("#youhuijuan_tishi").html('使用了'+error_wz+'，优惠 <span style="color:#FF0000;">'+this_value+'</span> 元');	
		$("#youhuijuan_tishi").hide();
		$("#shop_order_zj_box_youhui").html(this_value);
	}		
}

// 加入收藏 兼容360和IE6 
function ShouCang(sTitle,sURL){ 
	try{ 
		window.external.addFavorite(sURL, sTitle); 
	} 
	catch (e){ 
		try{ 
			window.sidebar.addPanel(sTitle, sURL, ""); 
		} 
		catch (e){ 
			alert("加入收藏失败，请使用Ctrl+D进行添加"); 
		} 
	} 
}

//购买页快递价格计算
function buy_express_price(price,num,kd_id,sid,express_type)
{
	if(kd_id==0){
		return (price*num)+"&&&null";	
	}else{

		if(express_json[kd_id][express_type][sid]){
			var kd_sf = express_json[kd_id][express_type][sid]['sf'];
			var kd_xf = express_json[kd_id][express_type][sid]['xf'];
		}else{
			var kd_sf = express_json[kd_id][express_type]['000000']['sf'];
			var kd_xf = express_json[kd_id][express_type]['000000']['xf'];
		}
		
		if(num==1){
			var z_money = parseFloat(price*num)+parseFloat(kd_sf);
			var z_yf = parseFloat(kd_sf);
		}else{
			var z_money = parseFloat(price)*num+parseFloat(kd_sf)+parseFloat(parseFloat(kd_xf)*(num-1));
			var z_yf = parseFloat(kd_sf)+parseFloat(parseFloat(kd_xf)*(num-1));
		}
	
		return z_money+"&&&"+z_yf;
	}
}

function accAdd(arg1, arg2) {

        var r1, r2, m, c;

        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }

        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }

        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2))
        if (c > 0) {
            var cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = Number(arg1.toString().replace(".", ""));
                arg2 = Number(arg2.toString().replace(".", "")) * cm;
            }
            else {
                arg1 = Number(arg1.toString().replace(".", "")) * cm;
                arg2 = Number(arg2.toString().replace(".", ""));
            }
        }
        else {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", ""));
        }
        return (arg1 + arg2) / m

}
function money_sum_order(type){
	var sum = 0;
	$('.order_sub_p_money').each(function(k,v){
		sum = sum+parseFloat($(v).text());
 	//	console.log(parseFloat($(v).text()));
	});
	
     sum = parseFloat($("#shop_order_zj_box_money").attr("data-price")) ;	
	 
	
 
    $yf = 0;
	$('.order_sub_p_yf').each(function(k,v){
	    if($(v).text()){
		   $yf += (parseFloat($(v).text().replace("运费：","")));
		}
	});
   
    sum = accAdd(sum,$yf);
	var yunfei_arr = new Array();	//声明一个快递数组
	var yunfei_zjg = 0;
	var yi = 0;
	var yunfei_jian = 0;
	$('.products_money_yf_jsz').each(function(k,v){
		yunfei_arr[yi] = $(v).val();
		yunfei_zjg = parseFloat(yunfei_zjg)+parseFloat($(v).val());
		yi = yi+1;
	});
	
	var yunfei_arr_max = Math.max.apply(null,yunfei_arr);
	yunfei_jian = yunfei_zjg-yunfei_arr_max;

	sum = sum-yunfei_jian;
	
	$("#order_sub_max_yunfei").html(yunfei_arr_max);
	$("#products_order_sum_money").html(parseFloat(sum-all_coupon_price));
	$("#commodity_price_yuanshi").val(sum);
	if(type!="sf")$("#shop_order_zj_box_yunfei").html(yunfei_arr_max+'.00');
	
	var c_price_yuanshi_tc = $("#commodity_price_yuanshi_tc").val();
	if(c_price_yuanshi_tc){
		var c_yunfei = $("#shop_order_zj_box_yunfei").html();
		if( isNaN(parseFloat(c_yunfei))) c_yunfei=0;
		c_price_yuanshi_tc = parseFloat(c_price_yuanshi_tc)+parseFloat(c_yunfei);
		$("#shop_order_zj_box_paymoney").html(parseFloat(c_price_yuanshi_tc).toFixed(2));
		$("#products_order_sum_moneytc").html(parseFloat(c_price_yuanshi_tc).toFixed(2));
	}else{
		$("#shop_order_zj_box_paymoney").html(parseFloat(sum-all_coupon_price).toFixed(2));
	}
	
}


//验证是否登录小弹窗
function if_login_container(xx_tp){
	var strr = 1;
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/products/if_login_container",
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==1){

				var sFrom=getCookie("from");
				if(sFrom=="swjoy"){
					if(html_rtype==1){
						 if($("#pro_pid").val()==905){
						 	location="http://fhhk.swjoy.com/embed/5002/oauth2/?client_id=5002&redirect_uri=http://www.fhyx.com/api/test?reback="+encodeURIComponent(("/products/buy_temp.html?l=/auction/order_sw.html&rtype=1&num="+$("#content_num_txt").val()+"&pid="+$("#pro_pid").val()).replace(/&/g,"@@"))+"&response_type=code&state=1";
						 }else{
						 	location="http://fhhk.swjoy.com/embed/5002/oauth2/?client_id=5002&redirect_uri=http://www.fhyx.com/api/test?reback="+encodeURIComponent(("/products/buy_temp.html?l=/auction/order.html&rtype=1&num="+$("#content_num_txt").val()+"&pid="+$("#pro_pid").val()).replace(/&/g,"@@"))+"&response_type=code&state=1";
						 }
					}else if(html_rtype==2){
                            location="http://fhhk.swjoy.com/embed/5002/oauth2/?client_id=5002&redirect_uri=http://www.fhyx.com/api/test?reback="+encodeURIComponent(("/car/add.html?l=/car/&num="+$("#content_num_txt").val()+"&pid="+$("#pro_pid").val()).replace(/&/g,"@@"))+"&response_type=code&state=1";
					}else{
                            location="http://fhhk.swjoy.com/embed/5002/oauth2/?client_id=5002&redirect_uri=http://www.fhyx.com/api/test?reback="+encodeURIComponent(("/products/buy_temp.html?l=/auction/order.html&rtype=3&num=1&pid="+$("#pro_pid").val()).replace(/&/g,"@@"))+"&response_type=code&state=1";
					}
				}else{
					insert_window(xx_tp);
				    $("#login_container_dis").show();
				    strr = "1";
				}
			}
			
			if(json[0].str==2){
				$("#login_container_dis").html("");
				$("#login_container_dis").hide();
				strr = "2";
			}
				
		 },error:function(){strr = "1";}
	
	 });
	 return strr;	
}


function close_container_dis(){
	$("#login_container_dis").html("");
	$("#login_container_dis").hide();	
	$("#login-msg-error").hide();
	$("#login-msg-error p").html("");
	$("#login-msg-error-nm").hide();
	$("#login-msg-error-nm p").html("");
}

function login_container_submit(){
	var l_uname = $("#TPL_username_1").val();
	var l_pwd = $("#TPL_password_1").val();	
	
	var p_id = $("#pro_pid").val();
	var p_num = $("#content_num_txt").val();
	var pro_packageid = $("#pro_packageid").val();
	if(pro_packageid){
	   p_id=pro_packageid;
	}

	if(l_uname=="" || l_pwd==""){
		$("#login-msg-error").show();
		$("#login-msg-error p").html("请输入账户名和密码");		
		return false;
	}
	
	if(l_uname && l_pwd){
		//登录异步		
		$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/products/login_container",
		 data:{username:l_uname,password:l_pwd,pid:p_id,num:p_num,rtype:html_rtype},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==1){
				$("#login-msg-error").show();
				$("#login-msg-error p").html(json[0].error);		
				return false;
			}
			
			if(json[0].str==2){
				close_container_dis();
				if(json[0].kj_str==0){location.reload();}
				if(json[0].kj_str==1){location.href='/auction/order.html';}
				if(json[0].kj_str==2){location.href='/car/index.html';}
				return true;
			}
				
		 },error:function(){return false;}
	
	 	});		
	}

}

function commodity_nm_error(str)
{
	$("#login-msg-error-nm").show();
	$("#login-msg-error-nm p").html(""+str+"");			
}

function commodity_nm_error_old(str)
{
	$("#login-msg-error-nm-old").show();
	$("#login-msg-error-nm-old p").html(""+str+"");			
}

//匿名购买
function commodity_nm_buy()
{
	var nm_tel = $("#TPL_tel").val();
	var nm_code = $("#TPL_code").val();
	var nm_pid = $("#commodity_nm_pid").val();
	
	if(nm_tel==''){
		commodity_nm_error('手机号码不能为空');
		return false;
	}
	
	if(nm_tel.length!=11 || isNaN(nm_tel)){
		commodity_nm_error('手机号码格式错误');
		return false;	
	}
	
	if(nm_code==''){
		commodity_nm_error('请输入手机验证码');
		return false;
	}
	
	if(nm_code.length!=6 || isNaN(nm_code)){
		commodity_nm_error('手机验证格式错误');
		return false;
	}
	
	if(nm_pid=='' || isNaN(nm_pid)){
		return false;	
	}
	
	$.ajax({
		type: "GET",
		async: false,
		url: "/products/nmbuy_code_iftrue",
		data:{nm_tel:nm_tel,nm_code:nm_code},
		dataType: "jsonp",
		jsonp: 'callback',
		jsonpCallback: "success_jsonpCallback",
		success: function(json){
			if(json[0].str==1){
				commodity_nm_error(json[0].error);
			}else{
				document.commodity_nm_submit.submit();
			}
		}
	})
	
			
}



//匿名发送CODE
function jsq() {
	$str = st + "(" + c + ")";
	if (c < 0) {
		$str = st;
		c = time + 1;
		clearInterval(timer);
		timer = "";
		$("#mfhqyzm").addClass("get_yzm_ok");
		$("#mfhqyzm").removeClass("get_yzm_nook");
	}
	$("#mfhqyzm").val($str);
	c = c - 1;
}


//匿名购买&用户名&密码
function commodity_nm_buy_old()
{
	var nm_name = $("#TPL_nm_name").val();
	var nm_pwd = $("#TPL_nm_pwd").val();
	var nm_pwd_qd = $("#TPL_nm_pwd_qd").val();
	var nm_pid = $("#commodity_nm_pid_old").val();
	
	if(nm_name==''){
		commodity_nm_error_old('用户名不能为空');
		return false;
	}
	
	if(nm_name.length < 6 || nm_name.length > 30){
		commodity_nm_error_old('用户名长度限制6~30位');
		return false;	
	}
	
	if(nm_pwd==''){
		commodity_nm_error_old('请输入领取密码');
		return false;
	}
	
	if(nm_pwd.length < 6 || nm_pwd.length > 30){
		commodity_nm_error_old('密码长度限制6~30位');
		return false;	
	}
	
	if(nm_pwd_qd==''){
		commodity_nm_error_old('请输入确定密码');
		return false;
	}
	
	if(nm_pwd_qd!=nm_pwd){
		commodity_nm_error_old('两次输入的密码不一致');
		return false;
	}
	
	if(nm_pid=='' || isNaN(nm_pid)){
		return false;	
	}
	
	$.ajax({
		type: "GET",
		async: false,
		url: "/products/nmbuy_code_iftrue_old",
		data:{nm_name:nm_name,nm_pwd:nm_pwd,nm_pwd_qd:nm_pwd_qd},
		dataType: "jsonp",
		jsonp: 'callback',
		jsonpCallback: "success_jsonpCallback",
		success: function(json){
			if(json[0].str==1){
				commodity_nm_error_old(json[0].error);
			}else{
				document.commodity_nm_submit_old.submit();
			}
		}
	})
	
			
}



//内页第三方登录
function c_login_dsf(dsf_type){
	var c_login_url = window.location.href;
	
	var p_id = $("#pro_pid").val();
	var p_num = $("#content_num_txt").val();
	var pro_packageid = $("#pro_packageid").val();
	if(pro_packageid){
	   p_id=pro_packageid;
	}
	
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/header/login_dsf",
		 data:{dsf_type:dsf_type,taocan_url:c_login_url,pid:p_id,num:p_num,rtype:html_rtype},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==1){
				location.href=''+json[0].href;	
			}	
		 },error:function(){}
	
	 });
}




//登录&匿名购买
function insert_window(tp)
{

var window_html = '';
window_html = window_html+'	<div class="login-container-tit">';
window_html = window_html+'    	<i class="shop-ico close-container" onclick="close_container_dis();" title="关闭"></i>';

if(tp==1){
	window_html = window_html+'        <span>会员登录</span>';
}else{
	window_html = window_html+'        <span id="tc1" onclick="setTab(\'tc\',1,3)" class="selected">会员登录</span>';
	window_html = window_html+'        <span id="tc2" onclick="setTab(\'tc\',2,3)" style="color:red;">免注册购买</span>';	
}

window_html = window_html+'    </div>';
    
window_html = window_html+'    <div class="login-container-con" id="con_tc_1" style="display:block;">';
    	
window_html = window_html+'        <div class="login-msg" id="login-msg-error">';
window_html = window_html+'            <p class="error"></p>';			
window_html = window_html+'        </div>';
        
window_html = window_html+'        <label for="TPL_username_1">登录名：</label>';
window_html = window_html+'        <input type="text" name="TPL_username" id="TPL_username_1" class="login-text" value="" placeholder="手机号/会员名/邮箱" tabindex="1">';
window_html = window_html+'        <label for="TPL_password_1"><a href="/account/forget_passwd.html" target="_blank">忘记登录密码?</a>登录密码：</label>';
window_html = window_html+'        <input type="password" name="TPL_pwd" id="TPL_password_1" class="login-text" value="" tabindex="1">';
window_html = window_html+'        <div class="clear_10"></div>';
window_html = window_html+'        <a href="javascript:void(0);" class="login-container-button" onclick="login_container_submit();">登 录</a>';
window_html = window_html+'        <div class="login-mfzc"><a href="/account/reg.html" target="_blank">免费注册<div style="color:red">送优惠券</div></a><span>第三方帐号登录</span></div>';
 
window_html = window_html+'    <div class="login-disanfang"><a href="javascript:void(0);" class="c_login_weixin" title="微信" onclick="c_login_dsf(1);"></a><a href="javascript:void(0);" class="c_login_qq" title="QQ" onclick="c_login_dsf(2);"></a> <a href="javascript:void(0);" class="c_login_yx" title="游侠论坛" onclick="c_login_dsf(3);"></a></div>';
window_html = window_html+'    </div>';
    
if(tp==2){    
window_html = window_html+'    <div class="login-container-con" id="con_tc_2" style="display:none;">';
window_html = window_html+'		<form method="post" name="commodity_nm_submit" action="/auction/anonymous.html">';    	
window_html = window_html+'        <div class="login-msg" id="login-msg-error-nm">';
window_html = window_html+'            <p class="error">请输入密码</p>';			
window_html = window_html+'        </div>';
        
window_html = window_html+'        <label for="TPL_tel">手机号码：<font onclick="setTab(\'tc\',3,3)" style="color:red;font-weight:normal;cursor:pointer;">(手机没收到验证码？点击这里！)</font></label>';
window_html = window_html+'        <input type="text" name="nm_phone" id="TPL_tel" class="login-text" value="" tabindex="1" maxlength="11">';
window_html = window_html+'        <label for="TPL_code">手机验证码：</label>';
window_html = window_html+'        <input type="text" name="nm_yzm" id="TPL_code" class="login-text-yzm" value="" tabindex="1" maxlength="6"><input type="button" value="免费获取验证码" id="mfhqyzm" class="get_yzm_ok" />';
window_html = window_html+'        <label>支付方式</label>';
window_html = window_html+'        <input name="pay_type" type="radio" value="8" id="ptype2" checked="checked" class="xuan_ptype"><label class="xuan_span" for="ptype2"><img src="/public/images/alipay.jpg" title="支付宝"></label>';
window_html = window_html+'        <input name="pay_type" type="radio" value="1" id="ptype1" class="xuan_ptype"><label class="xuan_span" for="ptype1"><img src="/public/images/visa.jpg" title="网上银行"></label>';
window_html = window_html+'        <div class="clear_15"></div>';
window_html = window_html+'        <a href="javascript:void(0);" class="login-container-button" onclick="commodity_nm_buy();">确认购买</a>';
window_html = window_html+'		   <input type="hidden" name="pro_id" value="'+$("#pro_pid").val()+'" id="commodity_nm_pid" />';
window_html = window_html+'		   <input type="hidden" name="pro_p_num" value="'+$("#content_num_txt").val()+'" />';
window_html = window_html+'        <div class="login-mfzc" style="text-align:left;">无需注册，直接购买，系统自动秒发！</div>';
window_html = window_html+'        <div class="login-mfzc" style="margin-top:10px;text-align:left;color:#FF0000;cursor:pointer;" id="tc3" onclick="setTab(\'tc\',3,3)">没有手机？点击切换用户名密码购买！</div>';
window_html = window_html+'			</form>';
window_html = window_html+'    </div>';


window_html = window_html+'    <div class="login-container-con" id="con_tc_3" style="margin-top:10px;display:none;">';
window_html = window_html+'		<form method="post" name="commodity_nm_submit_old" action="/auction/anonymous_old.html">';    	
window_html = window_html+'        <div class="login-msg" id="login-msg-error-nm-old">';
window_html = window_html+'            <p class="error">请输入密码</p>';			
window_html = window_html+'        </div>';
        
window_html = window_html+'        <label for="TPL_tel">用户名：</label>';
window_html = window_html+'        <input type="text" name="nm_name" id="TPL_nm_name" class="login-text" value="" tabindex="1" maxlength="30">';
window_html = window_html+'        <label for="TPL_code">领取密码：</label>';
window_html = window_html+'        <input type="password" name="nm_pwd" id="TPL_nm_pwd" class="login-text" value="" tabindex="1" maxlength="30">';
window_html = window_html+'        <label for="TPL_code">确认密码：</label>';
window_html = window_html+'        <input type="password" name="nm_pwd_qd" id="TPL_nm_pwd_qd" class="login-text" value="" tabindex="1" maxlength="30">';
window_html = window_html+'        <label>支付方式</label>';
window_html = window_html+'        <input name="pay_type" type="radio" value="8" id="ptype22" checked="checked" class="xuan_ptype"><label class="xuan_span" for="ptype22"><img src="/public/images/alipay.jpg" title="支付宝"></label>';
window_html = window_html+'        <input name="pay_type" type="radio" value="1" id="ptype11" class="xuan_ptype"><label class="xuan_span" for="ptype11"><img src="/public/images/visa.jpg" title="网上银行"></label>';
window_html = window_html+'        <div class="clear_15"></div>';
window_html = window_html+'        <a href="javascript:void(0);" class="login-container-button" onclick="commodity_nm_buy_old();">确认购买</a>';
window_html = window_html+'		   <input type="hidden" name="pro_id" value="'+$("#pro_pid").val()+'" id="commodity_nm_pid_old" />';
window_html = window_html+'		   <input type="hidden" name="pro_p_num" value="'+$("#content_num_txt").val()+'" />';
window_html = window_html+'        <div class="login-mfzc" style="text-align:left;color:#FF0000;cursor:pointer;" id="tc2" onclick="setTab(\'tc\',2,3)">点击切换至手机购买！</div>';
window_html = window_html+'			</form>';
window_html = window_html+'    </div>';


}



$("#login_container_dis").html(window_html);
		
}



function GetDTime()
{
	$(".dao_time").each(function(i){
		var this_time = $(this).attr("data-e");
		var this_i = $(this).attr("data-i");
		
		var EndTime= new Date(''+this_time+'');
		var NowTime = new Date();
		var t =EndTime.getTime() - NowTime.getTime();
		var d=0;
		var h=0;
		var m=0;
		var s=0;
		if(t>=0){
		  d=Math.floor(t/1000/60/60/24);
		  h=Math.floor(t/1000/60/60%24);
		  m=Math.floor(t/1000/60%60);
		  s=Math.floor(t/1000%60);
		}
		
		$("#t_d_"+this_i).html(d+"天");
		$("#t_h_"+this_i).html(h+"时");
		$("#t_m_"+this_i).html(m+"分");
		$("#t_s_"+this_i).html(s+"秒");
	
	});

}

//到货通知
function insert_daohuo(dh_tel,dh_email)
{
	var daohuo_html = '';
	daohuo_html = daohuo_html+'';
	daohuo_html = daohuo_html+'   <div class="down_detail_showdow_con detailshow">';
	daohuo_html = daohuo_html+'        <div class="down_detail_showdow_con_title">';
	daohuo_html = daohuo_html+'           <em class="buy_yun"></em>';
	daohuo_html = daohuo_html+'           <span>到货通知</span>';
	daohuo_html = daohuo_html+'           <label id="close_voice" title="关闭" onclick="close_daohuo();"></label>';
	daohuo_html = daohuo_html+'        </div>';
	daohuo_html = daohuo_html+'        <div class="down_detail_buy_con">';
	daohuo_html = daohuo_html+'           尊敬的用户，感谢您的支持。该商品<span>暂未到货</span>，如您想第一时间获取到货信息，请留下您的联系方式<span>（手机或邮箱）</span>。';
	daohuo_html = daohuo_html+'        </div>';
	daohuo_html = daohuo_html+'        <div class="down_detail_buy_btn">';
	daohuo_html = daohuo_html+'            <span>手机号码：</span>';
	daohuo_html = daohuo_html+'            <input type="text" name="" class="down_detail_buy_txt" value="'+dh_tel+'">';
	daohuo_html = daohuo_html+'            <span class="spanother">邮箱地址：</span>';
	daohuo_html = daohuo_html+'            <input type="text" name="" class="down_detail_buy_txt1" value="'+dh_email+'">';
	daohuo_html = daohuo_html+'            <a href="javascript:void(0);" class="down_detail_buy_sub" onclick="post_daohuo();">提交信息</a>';
	daohuo_html = daohuo_html+'        </div>';
	daohuo_html = daohuo_html+'        <div class="down_detail_buy_error" id="daohuo_error"></div>';
	daohuo_html = daohuo_html+'   </div>';
	
	$("#shop_daohuotongzhi").html(daohuo_html);
	$("#shop_daohuotongzhi").show();
}

function shop_dhtz(){
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/header/daohuo",
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==1){
				insert_daohuo('','');	
			}else{
				insert_daohuo(json[0].tel,json[0].email);	
			}	
		 },error:function(){insert_daohuo('','');}
	 });
}

function IsMobile(text) {

	  var _d = /^1[3578][01379]\d{8}$/g;
	  var _l = /^1[34578][01256]\d{8}$/g;
	  var _y = /^(134[012345678]\d{7}|1[34578][012356789]\d{8})$/g;
	  if (_d.test(text)) {
		  return 3;
	  } else if (_l.test(text)) {
		  return 2;
	  } else if (_y.test(text)) {
		  return 1;
	  }
	  return 0;
	  
}

function IsEmail(str){
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}

//到货通知~
function close_daohuo()
{
	$("#shop_daohuotongzhi").hide();
	$("#daohuo_error").html('');	
}

function close_gamedownload()
{
	$("#game_download_window").hide();	
}

function open_gamedownload()
{
	$("#game_download_window").show();	
}

function post_daohuo()
{
	var dh_tel = $(".down_detail_buy_txt").val();
	var dh_email = $(".down_detail_buy_txt1").val();
	var dh_pid = $("#pro_pid").val();
	
	if(dh_pid==''){
		$("#daohuo_error").html('请先选择商品');
		return false;	
	}	
	if(dh_tel=='' && dh_email==''){
		$("#daohuo_error").html('*手机号码和邮箱不能都为空');
		return false;	
	}
	
	if(dh_tel.length>0){
		 if(!IsMobile(dh_tel)){
			$("#daohuo_error").html('手机号码的格式不正确');
			return false;	
		 }
	 }
	 
	if(dh_email.length>0){
		 if(!IsEmail(dh_email)){
			 $("#daohuo_error").html('邮箱格式不正确');
			 return false;
		 }
	}
	
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/products/daohuo",
		 data:{dh_pid:dh_pid,dh_tel:dh_tel,dh_email:dh_email},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==1){
				$("#daohuo_error").html(json[0].error);	
			}else{
				$("#daohuo_error").html('提交成功！');
				setTimeout(close_daohuo,1000);
					
			}	
		 },error:function(){}
	
	 });
	 
}

function buy_temp(rtype,pid,num)
{
	$.ajax({   
		 type:"GET",
		 async:false,
		 url: "/products/buy_temp",
		 data:{rtype:rtype,pid:pid,num:num},
		 dataType:"jsonp",
		 jsonp : 'callback', 
		 jsonpCallback:"success_jsonpCallback",
		 success: function(json){ 		
			if(json[0].str==2){
				var sFrom=getCookie("from");
				if(sFrom=="swjoy" && pid==905 && rtype==1){
                    location.href='/auction/order_sw.html';
				}else{
					location.href='/auction/order.html';
				}
			}	
		 },error:function(){}
	
	 });
}

function fhyx_setCookie(c_name,value,expiredays,domains){
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays);
	cookieVal=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";domain="+domains+";expires="+exdate.toGMTString()+";path=/;");
	document.cookie=cookieVal;
}

function setCookie(c_name,value,expiredays){
			var exdate=new Date();
			exdate.setTime(exdate.getTime()+expiredays*24*60*60*1000); 
			cookieVal=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString()+";path=/");
			document.cookie=cookieVal;
}



function fhyx_getCookie(Name)			//cookies读取
{
	var search = Name + "="
	if(document.cookie.length > 0) 
	{
		offset = document.cookie.indexOf(search)
		if(offset != -1) 
		{
			offset += search.length
			end = document.cookie.indexOf(";", offset)
			if(end == -1) end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		 }
	else return ""
	  }
}


function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r != null) return unescape(r[2]); return null; //返回参数值
}
function getfaq(){
	if(getUrlParam("faq"))
	{
	   setTabN('qh',getUrlParam("faq"),7);
	}
}


function SlideToggleAd() 
{/*
	var aniTime = 700,me= this;
	this.html = $('.adfhyxSlideToggle');
	this.wrap = this.html.find('ul');
		var n = 700,
		t = null;
		$(".ad-slide-list .item").hover(function ()  {
		  //console.log($(".index_ad_stl .ad-slide-all .item").width());
		  var innerWrap = $(this);
		  var targetMarginLeft = $(this).index()*innerWrap.width();
		  innerWrap.stop().animate({width:$('.adfhyxSlideToggle').width()}, aniTime);
		  innerWrap.find('.c2').stop().animate( { width: $(".index_ad_stl .ad-slide-all .c2 img").width() }, aniTime);
		  me.wrap.stop().animate({
			'margin-left': -targetMarginLeft
		  }, aniTime);
		},function(){
		  var innerWrap = $(this);
		  me.wrap.stop().animate({'margin-left': 0}, aniTime);
		  innerWrap.find('.c2').stop().animate({ width: 0 }, aniTime);
		  n=0;
		  if($(this).index()==0){n = 1;}
		  innerWrap.stop().animate({width:$(".index_ad_stl .ad-slide-all .item:eq("+n+")").width()}, aniTime);
		}
		)*/
		
 
 this.html = $('.adfhyxSlideToggle');
this.wrap = this.html.find('ul');
    var aniTime = 700,me= this;
	var n = 700,
	t = null;
	$(".ad-slide-list .item").hover(function ()  {
      var innerWrap = $(this);
	  
	  
      var targetMarginLeft = $(this).index()*306;
      innerWrap.stop().animate({width:1210}, aniTime);
      innerWrap.find('.c2').stop().animate( { width: 902 }, aniTime);
      me.wrap.stop().animate({
        'margin-left': -targetMarginLeft
      }, aniTime);
    },function(){
      var innerWrap = $(this);
      me.wrap.stop().animate({'margin-left': 0}, aniTime);
      innerWrap.find('.c2').stop().animate({ width: 0 }, aniTime);
    	innerWrap.stop().animate({width:306}, aniTime);
    }
		
	)
}

$(function($){

$(window).scroll(function(){
	if($(this).scrollTop()!=0){
		$('#backtop').fadeIn();
	}else{
		$('#backtop').fadeOut();
	}
});

//分销子标识cookie

if(location.search){
     var sSearch=location.search;
     if(sSearch.indexOf("ukey=")!=-1){
     	  var aParams=sSearch.split("ukey=");
     	  if(aParams[1]){
     	  	   if(aParams[1].indexOf("&")!=-1){
     	  	   	    var sUkey=aParams[1].substring(0,aParams[1].indexOf("&"));
     	  	   }else var sUkey=aParams[1];
     	  }
     	  setCookie("ukey",encodeURIComponent(sUkey),7);
     }
     if(sSearch.indexOf("from=")!=-1){
     	  var aParams=sSearch.split("from=");
     	  if(aParams[1]){
     	  	   if(aParams[1].indexOf("&")!=-1){
     	  	   	    var sFrom=aParams[1].substring(0,aParams[1].indexOf("&"));
     	  	   }else var sFrom=aParams[1];
     	  }
     	  setCookie("from",encodeURIComponent(sFrom),1);
     }
}

//全站导航
$(".ali-header-con-mysc").hover(function(){
	$(this).addClass("home-hover");
},function(){
	$(this).removeClass("home-hover");
})

$(".ali-header-con-left-menu,.ali-header-con-myshop").hover(function(){
	$(this).addClass("menu-hover");
},function(){
	$(this).removeClass("menu-hover");
})

//搜索自动完成
$("#commodity_search").bigAutocomplete({url:"/header/searchauto"});

//搜索自动完成
$("#commodity_search2").bigAutocomplete({url:"/header/searchauto"});


//页面定义个变量，根据变量判断导航是否展开.newshop_menu (0展开，1不展开)

//产品分类展开
if(newshop_menu==1){
	$(".shop-nav-menu").hover(function(){
		$(".shop-nav-menu-hd").show();	
	},function(){
		$(".shop-nav-menu-hd").hide();
	})
}else{
	$(".shop-nav-menu-hd").show();	
}

$("#shop-list-hover li").hover(function(){
	$(this).addClass("current");		
},function(){
	$(this).removeClass("current");
})

$(".shop-nav-box ul li").hover(function(){
	if($(this).attr("data-jg")=="n"){
		$(this).addClass("current");
	}
},function(){
	if($(this).attr("data-jg")=="n"){
		$(this).removeClass("current");
	}
})


/*内容页-收藏商品*/
$("#content_shoucang_button").click(function(){
	
	var sc_login_ret = if_login_container(1);	

	if(sc_login_ret==1){return;}
	
	content_collection_add();
})


$(".n-left-menu-class").click(function(){
	var left_m_id = $(this).attr("data-id");	
	
	if(typeof($(this).attr("ifdj")) == "undefined"){
		$(".left-menu-"+left_m_id+"").show();	
		$(this).attr("ifdj","ok");
	}else{
		$(".left-menu-"+left_m_id+"").hide();
		$(this).removeAttr("ifdj");
	}
})

$(".item_xl").click(function(){
	//$(".item_xl_box").hide();
	var item_xl_id = $(this).attr("data-id");
	
	if(typeof($(this).attr("ifdj")) == "undefined"){
		$("#item_xl_box_"+item_xl_id+"").show();
		$(this).attr("ifdj","ok");
	}else{
		$("#item_xl_box_"+item_xl_id+"").hide();
		$(this).removeAttr("ifdj");
	}
})

$(".item_xl2").click(function(){
	//$(".item_xl_box").hide();
	var item_xl_id2 = $(this).attr("data-id");
	
	if(typeof($(this).attr("ifdj")) == "undefined"){
		$("#item_xl_box_az_"+item_xl_id2+"").show();
		$(this).attr("ifdj","ok");
	}else{
		$("#item_xl_box_az_"+item_xl_id2+"").hide();
		$(this).removeAttr("ifdj");
	}
})



//美图
if(typeof(img_hover_no) == "undefined"){
$('img').each(function(){}).hover(function(){$(this).animate({opacity:0.8});}, function(){$(this).animate({opacity:1});})
}

/*内容页选择快递地区*/

$("#select_express,#select_express_2").click(function(){
	$("#content_express_select").show();
})

$("#content_express_select_tit").click(function(){
	$("#content_express_select").hide();	
})

$("#content_express_ul li").click(function(){
	
	var express_area_name = $(this).attr('data-name');
	var express_area_id = $(this).attr('data-id');
	
	//快递省赋值
	content_mr_sid = express_area_id;
	
	content_express_price(pro_express,content_mr_express_id,content_mr_sid);
	
	$("#select_express").html(express_area_name);
	
	$("#content_express_select").hide();		
})

/*内容页-商品特征属性选择*/

//特征属性级别（1、2）
var pro_attr_type = $("#pro_attr_type").val();

//一级特征
$("#pro-attr-ul-1 li").click(function(){
	content_sub_null_close();
	$("#kucun_div").show();
	$("#pro_packageid").val('');
	if($(this).attr('class')=='tb-selected'){
		$(this).removeClass("tb-selected");	
		newshop_content_attr_1 = '';
		$("#pro_pid").val('');
		$("#pro_price").html(old_price);
		$("#pro_kucun_contain").show();
		$("#pro_kucun").html(old_kucun);
		$("#pro_img_src").attr("src",old_img);
		
		$("#shop_content_buy,#shop_content_addcar").show();
		$("#shop_content_no_buy").hide();	
		
		commodity_f5_dg();
		
	}else{
		$("#pro-attr-ul-1 li").removeClass("tb-selected");
		$(this).addClass("tb-selected");
		newshop_content_attr_1 = $(this).attr('data-attr-id');
		
	
			/*检测是否含有二级菜单*/
		if($(this).attr("number")==1){ 
		   $("#pro_pid").val($(this).attr("data-attr-id"));
	      // $("#p_zhekou").html(commodity_json[products_id]['']['zk']+'折');	
		   $("#pro_price").html(commodity_json[products_id]['']['price']);
		   if(commodity_json[products_id]['']['price']==commodity_json[products_id]['']['old_price']){
		   	    $("#p_old_price").hide();
		   }else{
		   	    $("#p_old_price").html(commodity_json[products_id]['']['old_price']).show();
		   }
		   $("#pro_img_src").attr("src",commodity_json[products_id]['']['img']);
 		}
		
		
		if(pro_attr_type==1){commodity_f5(newshop_content_attr_1);}
		
		if(pro_attr_type==2){
			if(newshop_content_attr_1 && newshop_content_attr_2){
				commodity_f5(newshop_content_attr_1+","+newshop_content_attr_2);	
			}	
		}
		//如果有套餐设为不选状态
		if($("#pro-attr-ul-30").length!=0){ 
		   $("#pro-attr-ul-30 li").attr("class","");
		}
		
	}	
})


$("#pro-attr-ul-2 li").click(function(){
	content_sub_null_close();
	$("#kucun_div").show();
	$("#pro_packageid").val('');
	if($(this).attr('class')=='tb-selected'){
		$(this).removeClass("tb-selected");	
		newshop_content_attr_2 = '';
		$("#pro_pid").val('');
		$("#pro_price").html(old_price);
		$("#pro_kucun_contain").show();
		$("#pro_kucun").html(old_kucun);
		$("#pro_img_src").attr("src",old_img);
		
		$("#shop_content_buy,#shop_content_addcar").show();
		$("#shop_content_no_buy").hide();	
		
	}else{
		$("#pro-attr-ul-2 li").removeClass("tb-selected");
		$(this).addClass("tb-selected");
		newshop_content_attr_2 = $(this).attr('data-attr-id');
		
		if(pro_attr_type==2){
			if(newshop_content_attr_1 && newshop_content_attr_2){
				commodity_f5(newshop_content_attr_1+","+newshop_content_attr_2);	
			}	
		}
	}	
})


//套餐
$("#pro-attr-ul-30 li").click(function(){
$("#kucun_div").hide();
         $("#shop_content_addcar").hide();
	 	/*检测是否含有二级菜单*/
		if($("#pro-attr-ul-1").length!=0){ 
		    $("#pro-attr-ul-1 li").attr("class","");
			$("#pro_pid").val('');
		}
		if($("#pro-attr-ul-2").length!=0){ 
		    $("#pro-attr-ul-2 li").attr("class","");
			$("#pro_pid").val('');
		}
	   if($(this).attr('class')=='tb-selected'){
		  $(this).removeClass("tb-selected");	
		  $("#pro_pid").val('');	
		  $("#pro_packageid").val('');
	   }else{
		$("#pro-attr-ul-30 li").removeClass("tb-selected");
		$(this).addClass("tb-selected");
		tcid = $(this).attr("data-attr-id");
		$("#pro_packageid").val(tcid);
		$("#pro_price").html(tc_json[tcid]["price"]);
		$("#p_old_price").html("建议零售价:"+tc_json[tcid]["old_price"]);
		//$("#p_zhekou").html(tc_json[tcid]["zk"]+"折");
		 $("#pro_img_src").attr("src","http://img.fhyx.com"+tc_json[tcid]["img"]);
		 $("#shop_content_no_buy").hide();
		 $("#shop_content_buy").show();
		 var kd_fee=0;
		 var ems_fee=0;
		 if(tc_json[tcid]['express_arr']){
		 	   for(var k=0;k<tc_json[tcid]['express_arr'].length;k++){
                     if(tc_json[tcid]['express_arr'][k]>0){
                     	kd_fee=parseInt(content_express_taocan_price(0,tc_json[tcid]['express_arr'][k],content_mr_sid))>kd_fee ? parseInt(content_express_taocan_price(0,tc_json[tcid]['express_arr'][k],content_mr_sid)) : kd_fee;
                        ems_fee=parseInt(content_express_taocan_price(1,tc_json[tcid]['express_arr'][k],content_mr_sid))>ems_fee ? parseInt(content_express_taocan_price(1,tc_json[tcid]['express_arr'][k],content_mr_sid)) : ems_fee;
                     }
		 	   }
		 	   $("#shop_express_str").html('快递：'+kd_fee+".00");	
		       $("#shop_express_str_ems").html('EMS：'+ems_fee+".00");
		 }
	   }
		

})


//内页数量加减
$("#content_num_txt").keyup(function(){
	var jj_id = $("#pro_pid").val();
	var jj_num = $("#pro_kucun").html();
	
	if(jj_id==""){
		content_sub_null();
		$(this).val("1");
		return;	
	}
	
	if(isNaN($(this).val()) || parseInt($(this).val())<1){
		$(this).val("1");
		return;
	}
	
	if(parseInt($(this).val())>jj_num){
		$(this).val(jj_num);	
	}
})

//关闭报错提示
$("#content_sub_is_null_close").click(function(){
	content_sub_null_close();
})

//问题提交
$("#content_msgbook_sub").click(function(){
	$("#new-ali213-feedback").css("display","block");	
})

//问题提交
$("#new-ali213-feedback-sub").click(function(){
	feedback_ajax();
})

//问题提交关闭
$("#new-ali213-feedback-close").click(function(){
	close_feedback();
})

//套餐滑动门
$("#taocan_ul_li li").each(function(i){
	$(this).click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		$(".shop-content-taocan-box:eq("+i+")").show().siblings(".shop-content-taocan-box").hide();
	})
})

//立即购买
$("#shop_content_buy").click(function(){
	
	var post_p_id = $("#pro_pid").val();
	var post_p_num = $("#content_num_txt").val();
	
	//套餐
	if($("#pro_packageid").length!=0){
	   var tcid = $("#pro_packageid").val();
	   if(tcid){
	   html_rtype = 3;
	  var login_ret = if_login_container(1);	
	     buy_temp(3,tcid,1);
	    return "";
	   }
	}
	
	if(post_p_id==""){
		content_sub_null();
		return;	
	}
	
	html_rtype = 1;
	
	var pro_c_type = $("#commodity_lx").val();
	if(pro_c_type==1){
		var login_ret = if_login_container(2);	
	}else{
		var login_ret = if_login_container(1);	
	}

	if(login_ret==1){return;}
	
	buy_temp(1,post_p_id,post_p_num);
	//document.products_buy_submit.submit();
	
})


//套餐购买
$(".taocan_buy_submit").click(function(){ 
	
	html_rtype = 3;
	
	var t = $(this).attr("data-t");	
	var tcid = $("#get_taocan_id_"+t).val();
	$("#pro_packageid").val(tcid);
	
	var login_ret = if_login_container(1);
	if(login_ret=="1"){return false;}
	
	
	buy_temp(3,tcid,1);
	//$("#products_taocan_submit_"+t).submit();
})

//购物车
$("#shop_content_addcar").click(function(){
	
	var post_p_id = $("#pro_pid").val();
	var post_p_num = $("#content_num_txt").val();
	
	if(post_p_id==""){
		content_sub_null();
		return;	
	}
	
	html_rtype = 2;
	
	var login_ret = if_login_container(1);
	if(login_ret=="1"){return false;}
	
	content_add_car(post_p_id,post_p_num);
})

$("#shop-car-success-close").click(function(){
	$("#shop-car-success-position").hide();	
})


//购物车全选or 取消全选

$('#checkbox_all_top,#checkbox_all_bottom').live("click",function(){
	
	//清除第三方选中
	car_id_array2 = '';
	$(".list_checkbox2").each(function(){
		this.checked=false;	
	});
	$(".car-sum-money2").removeClass("products_num_money");
	$(".car_add_num2").removeClass("car-num-js");
							
	if(this.checked==true)
	{
		$(".list_checkbox").each(function(){
			this.checked=true;	
			car_id_array = car_id_array+this.value+",";
		});
		
		$("#checkbox_all_top").attr("checked","true");
		$("#checkbox_all_bottom").attr("checked","true");
		
		car_sub_dis();
		
		$(".car-sum-money").addClass("products_num_money");
		$(".car_add_num").addClass("car-num-js");
		money_sum();
		
	}
	else
	{
		$(".list_checkbox").each(function(){
			this.checked=false;	
			car_id_array = car_id_array.replace(""+this.value+",","");
		});
		
		$("#checkbox_all_top").removeAttr("checked");
		$("#checkbox_all_bottom").removeAttr("checked");
		
		car_id_array = '';
		
		car_sub_dis();
		
		$(".car-sum-money").removeClass("products_num_money");
		$(".car_add_num").removeClass("car-num-js");
		money_sum();
		
	}
});

//官方选中
$(".list_checkbox").live("click",function(){
	
	var jg_bs = $(this).attr("data-jiage-bs");	
	
	if(this.checked==true){
		$(".list_checkbox2").each(function(){
			this.checked=false;	
		});
		
		$(".car-sum-money2").removeClass("products_num_money");
		$(".car_add_num2").removeClass("car-num-js");
		
		car_id_array2 = '';
		car_id_array = car_id_array+this.value+",";
		
		$("#totalPrice_"+jg_bs+"").addClass("products_num_money");
		$("#content_num_txt_"+jg_bs+"").addClass("car-num-js");
		money_sum();
		
	}else{
		car_id_array = car_id_array.replace(""+this.value+",","");	
		
		$("#totalPrice_"+jg_bs+"").removeClass("products_num_money");
		$("#content_num_txt_"+jg_bs+"").removeClass("car-num-js");
		money_sum();
		
	}
	$("#checkbox_all_top").removeAttr("checked");
	$("#checkbox_all_bottom").removeAttr("checked");
	
	car_sub_dis();
})

//第三方选中
$(".list_checkbox2").live("click",function(){
	
	var jg_bs = $(this).attr("data-jiage-bs");	
	
	if(this.checked==true){
		$(".list_checkbox").each(function(){
			this.checked=false;	
		});
		
		$(".car-sum-money").removeClass("products_num_money");
		$(".car_add_num").removeClass("car-num-js");
		
		car_id_array = '';
		car_id_array2 = car_id_array2+this.value+",";
		
		$("#totalPrice_"+jg_bs+"").addClass("products_num_money");
		$("#content_num_txt_"+jg_bs+"").addClass("car-num-js");
		money_sum();
		
	}else{
		car_id_array2 = car_id_array2.replace(""+this.value+",","");	
		
		$("#totalPrice_"+jg_bs+"").removeClass("products_num_money");
		$("#content_num_txt_"+jg_bs+"").removeClass("car-num-js");
		money_sum();
		
	}
	$("#checkbox_all_top").removeAttr("checked");
	$("#checkbox_all_bottom").removeAttr("checked");
	
	car_sub_dis();
})


//购物车操作
var products_sum_num = 0;		//数量
var products_sum_money = 0;		//金额

$(".car_add_num,.car_add_num2").live("keyup",function(){
	var biaoshi = $(this).attr("data-biaoshi");
	var biaoshi_products_id = $(this).attr("data-products-id");
	var biaoshi_attr_value_id = $(this).attr("data-attr-value-id");
	var biaoshi_data_js = $(this).attr("data-js");
	
	//var kucun = commodity_json[biaoshi_products_id][biaoshi_attr_value_id]['num'];
	var kucun = $("#kucun_"+biaoshi+"").val();
	
	if(isNaN($(this).val()) || parseInt($(this).val())<1){
		$(this).val("1");
		$("#totalPrice_"+biaoshi+"").html($("#price_"+biaoshi+"").val());
		return;
	}
	
	if(parseInt($(this).val())>kucun){
		$(this).val(kucun);	
	}
	
	var total = parseFloat($("#price_"+biaoshi+"").val())*parseInt($(this).val());
	$("#totalPrice_"+biaoshi+"").html(total.toFixed(2));
	
	if(biaoshi_data_js==1){
		money_sum();
	}
})

//购物车提交
$(".car-submit").live("click",function(){
	document.shop_car_form.submit();
		
})

//收货地址选择
$("#shop_buy_address_select li").live("click",function(){
	
	$("#shop_buy_address_select li").removeClass("current");
	$("#shop_buy_address_select li input").removeAttr("checked");
	$(this).addClass("current");
	var data_i = $(this).attr("data-i");
	$("#address_"+data_i).attr("checked",true);
	
	express_type_post();
	
})

//提交并付款
$("#auction_buy_submit").click(function(){	
	
	var pay_type = $("input[name='pay_type']:checked").attr("data-file");
	
	if($("#call_phone").length > 0)
	{
	    call_phone = $("#call_phone").val();
	    if(call_phone==""){ 
              alert("联系电话用于提醒您支付尾款，请认真填写!");
			  $("#call_phone").focus();
              return fasle;			  
		} 
		reg = /^(?:13\d|15\d|18\d|14\d|17\d|16\d|19\d)\d{5}(\d{3}|\*{3})$/;
		if(!call_phone.match(reg)){ 
		  alert("电话格式错误!");
		  return false;
		}
	}
	

	if(products_type ==2){
		var address_id = $("input[name='address_id']:checked").val();
		if(address_id && pay_type){
			
			$("#zhifu_alert_bg,#zhifu_alert_box").show();
			
			$("#order_submit_url").attr("action", "/auction/pay/f/"+pay_type);
			$("#order_submit_url").submit();
		}else{
			$("#shop_buy_address_select").html('<div style="color:#FF0000;text-align:left;padding-left:85px;">收货地址不能为空，请先添加！</div>');	
		}
		
		
	}else{
		
		if(pay_type){
			
			$("#zhifu_alert_bg,#zhifu_alert_box").show();
			
			$("#order_submit_url").attr("action", "/auction/pay/f/"+pay_type);
			$("#order_submit_url").submit();	
		}
			
	}	
})


$("#mfhqyzm").live("click",function(){

	var nm_tel = $("#TPL_tel").val();
	if(nm_tel=='' || nm_tel.length!=11 || isNaN(nm_tel)){
		commodity_nm_error('请输入正确的手机号码');
		return false;	
	}		
	
	if($("#mfhqyzm").attr("class")!='get_yzm_nook'){
		$("#mfhqyzm").val(fsz);
		$("#mfhqyzm").addClass("get_yzm_nook");
		$("#mfhqyzm").removeClass("get_yzm_ok");
		$.ajax({
			type: "GET",
			async: false,
			url: "/send/getcode_nmbuy" + "?number=" + nm_tel,
			dataType: "jsonp",
			jsonp: 'callback',
			jsonpCallback: "success_jsonpCallback",
			success: function(json){
				if(json.status != 3 && json.status != 4){
					if(!timer) timer = setInterval("jsq()", 1000);
				}else{
					alert("请勿重新发送");
					$("#mfhqyzm").val(getcode);
					$("#mfhqyzm").addClass("get_yzm_ok");
					$("#mfhqyzm").removeClass("get_yzm_nook");
				}
			}
		})
	}
		
})


//优惠券选择
$("#select_coupon_price_id").change(function(){
	var this_value = $("#select_coupon_price_id").find("option:selected").attr("data");
	coupon_price_edit(this_value,1);
	$("#use_coupon_code_txt").val('');
	$("#use_coupon_code_error").html('');
	$("#use_coupon_code_hidden").val('');
	$("#use_coupon_code_id_hidden").val('');
	$("#coupon_is_type").val('1');
	
})

$("#list_div_zk").click(function(){
	$("#shop_class_zhankai_kg").css("height","auto");	
	$("#list_div_zk").hide();
	$("#list_div_sq").show();
})
$("#list_div_sq").click(function(){
	$("#shop_class_zhankai_kg").css("height","115px");	
	$("#list_div_zk").show();
	$("#list_div_sq").hide();
})



$("#user_remarks_put").on("click", function(e){
    $(this).removeClass("user_remarks_x");	
	$(this).addClass("beizhu_hover");

    $(document).one("click", function(){
        $("#user_remarks_put").removeClass("beizhu_hover");	
		$("#user_remarks_put").addClass("user_remarks_x");
    });

    e.stopPropagation();
});


$(".fhyx_xyh").hover(function(){
	$(this).addClass("frm_hover");	
	$(this).find(".frm_txt").animate({left:"-95px",opacity:"show"},200); 
},function(){
	$(".fhyx_xyh").removeClass("frm_hover");
	$(".frm_txt").animate({left:"-115px",opacity:"hide"},200);
})

$(".fhyx_xyh_car").hover(function(){
	$(this).addClass("frm_hover");	
	$(this).find(".frm_gwc_g").addClass("frm_gwc_g_h");	
},function(){
	$(".fhyx_xyh_car").removeClass("frm_hover");
	$(".frm_gwc_g").removeClass("frm_gwc_g_h");	
})

$('#backtop').click(function(){
	$('html,body').animate({scrollTop:$('.ali-header').offset().top},500);
});

$("#open_feedback").click(function(){
	$("#new-ali213-feedback").show();	
})

$("#close_shangxiangg").click(function(){
	$("#fhyx_ssgg_bg").hide();
	$("#fhyx_ssgg").hide();	
	fhyx_setCookie("adv",2,1);
})

$(".hk_menu_list_tit").click(function(){
	var hk_m_i = $(this).attr("hk-id");	
	$(".hk_menu_list_con").slideUp();
	$("#hk_menu_"+hk_m_i).slideDown();
})

$("#diaocha_close").click(function(){
	$("#diaocha").hide();	
})



 

  $(".wx_ewz_h").hover(function(){
        	 $(".wx_ewz").show();
        },function(){
        	 $(".wx_ewz").hide();
        })


 
 $(".pro-sys a").click(function(){
     if(href= $(this).attr("jump_href"))
	 {
	   host = window.location.host;
	   
	   if(host.indexOf(".hk") > 0)
	   {
	        if(host=="ali213.fhyx.hk")
        	{
        		host ="shop.ali213.com";
        	}
        	if(host=="swjoy.fhyx.hk")
        	{
        		host ="shop.swjoy.com";
        	}
	   }
	   $url = "http://"+host+href;
	   location.href=$url;
	 }
 })

 if(typeof(products_id)!="undefined" && $.inArray(products_id, [1700,1701,1702,1703,1704])!=-1){
     
 	 $(".center").append('<div class="get_coup">领取T恤专属优惠券</div>');

 	 $("body").delegate(".get_coup","click",function(){
 	 	   $.getJSON("/ajax/getcoupon.html",function(reback){
                if(reback.status==0){
                	  $("#pro_pid").val(commodity_json[products_id][$(".pro-list-right li").eq(0).attr("data-attr-id")]['pid']);
                	  if_login_container(1);
                }else if(reback.status==1){
                	  $(".coupon_contain span").html(parseInt(reback.data)+"元");
                	  $(".coupon_contain").show();
                }else{
                	  alert(reback.msg);
                }
 	 	   });
 	 });
 	 $(".coupon_contain em").bind("click",function(){
 	 	   $(".coupon_contain").hide();
 	 });
 }


})