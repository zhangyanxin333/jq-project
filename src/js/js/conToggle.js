//鼠标划过时A-Z的变化状况
function Toggle() {
    this.abtn = $(".index_card_alpha>a");
    this.btn = $(".index_card_hotgame");
    this.em = $(".index_card_hotgame>em");
}
Toggle.prototype = {
    init: function () {
        this.over();
        this.bover();
    },
    over: function () {
        this.abtn.mouseover(function () {
            $(this).css({
                "color": "#38A524",
                "border-bottom": "2px solid #38A524"
            }).siblings().css({
                "color": "#CECECE",
                "border-bottom": "2px solid #CECECE"
            })
            $(this).parent().prev().children("span").addClass("hotgame_active");
            $(this).parent().prev().children("em").addClass("active");
            
        })
    },
    bover: function () {
        this.btn.mouseover(function () {
                 $(this).children("em").css("background", "url(../img/Jt.png) no-repeat")
                $(this).children("span").css({
                    "color": "#38A524",
                    "border-bottom": "2px solid #38A524"
                }) 
                $(this).removeClass("hotgame_active");
            })
            this.btn.mouseout(function () {
                //this.em.css("display","none");
                $(this).children("em").css("background", "none")
                $(this).children("span").css({
                    "color": "#CECECE",
                    "border-bottom": "2px solid #CECECE"
                })
            })
    }
}

var toggle = new Toggle();
toggle.init();

//A-Z的数据封装   接口：http://www.fhyx.com/api/getcardgame?callback=success_jsonpCallback&_=1537195238133
$.ajax({
    type: "get",
    url: "/getcardgame?callback=success_jsonpCallback&_=1537195238133",
    dataType: "jsonp",
    data: {},
    success: function (data) {
        //鼠标划过abcd等获取里面的值
        var a = $(".index_card_alpha>a");
        a.mouseover(function(){
            var str = "";
            for (var i = 0; i < data.length; i++) {
                //console.log("woshi" + data[i].py,"我是" + $(this).text())
                if (data[i].py == $(this).text()) {
                    str += `<span><a href="##" target="_blank">${data[i].name}</a></span>`
                }
                $("#index_card_con_center_top").html(str);
            }
            //$("#index_card_con_center_top").html(str)
        })
    },
    error: function (e) {
        console.log(e)
    }
})
//鼠标划过热门游戏的时候让a-z的游戏消失 让热门游戏显示出来
$(".index_card_hotgame").bind("mouseover", function () {
    $("#index_card_con_center_top").hide();
    $(".index_card_con_center_top").eq(0).show();
});

$(".index_card_alpha a").bind("mouseover", function () {
    $("#index_card_con_center_top").css("display", "block");
    $(".index_card_con_center_top").eq(0).hide();
    /* if ($("#index_card_con_center_top span").length == 0) {
        $("#index_card_con_center_top").html('<em style="width:100%;text-align:center;height:220px;line-height:200px;font-size:16px;color:#999;">暂无相关游戏</em>');
    } */
});

