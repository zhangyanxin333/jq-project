//有分配短地址的话，cookie之from_where就为短址，否则就为union_uid 域名优先级更高 jobsfan 2016-12-14

/**
 * 凤凰游戏记录分销源的js
 */
var QueryString = {
    getQueryStringArgs: function () {
        //取得查询字符串并去掉开头的问号
        var qs = (location.search.length > 0 ? location.search.substring(1) : "");

        //保存数据的对象
        var args = {};

        //取得每一项
        var items = qs.split("&");
        var item = null,
            name = null,
            value = null;

        //逐个将每一项添加到args对象中
        for (var i = 0; i < items.length; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            args[name] = value;
        }

        return args;
    },
    
    getParameter: function (keyValue) {
        var args = this.getQueryStringArgs();
        if (args[keyValue] != undefined) {
            return args[keyValue];
        } else {
            return "";
        }
    }

};

var from_where = getCookie("from_where");
if (from_where==null || from_where==""){
	var unionName = getUnionName();
	if (unionName != "") setCookie("from_where",unionName,30);
}

if($("#down_gamersky")){
	var hgamer=location.hostname
	if(hgamer.indexOf("gamersky")!=-1){
		$("#down_gamersky").show();
	}
}

function setCookie(c_name,value,expiredays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

function getCookie(c_name){
	if (document.cookie.length>0){
		c_start=document.cookie.indexOf(c_name + "=");
		if (c_start!=-1){ 
			c_start=c_start + c_name.length+1;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) c_end=document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end));
		} 
	}
	return "";
}
function getUnionName(){

	var hostName=window.location.hostname;

	if(hostName=="shop.ali213.com") hostName="youxia";
	else if(hostName=="shop.swjoy.com") hostName="swjoy";
	else hostName = hostName.substring(0,hostName.indexOf("."));

	var params = QueryString.getQueryStringArgs();
	var unionId = params["union_id"] ? parseInt(params["union_id"]) : "";
	if (hostName != "www"){
		return validUnion(hostName) || "";
	}else if(unionId != ""){
		return validUnion("union_"+unionId) || "";
	}else{
		return "";
	}
}

function validUnion(unionMark){
	var validMark = "";
	$.ajax({url:"/account/validunion?unionMark="+unionMark,async:false,dataType:"text",success:function(result){
		validMark = result;
	}});
	return validMark;
}