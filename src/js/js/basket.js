//pc game 那里的数据通过ajax获取然后渲染进页面
$.ajax({
    type: "post",
    url: "/index/floor-104.do",
    dataType: "json",
    data: {
        wd: ""
    },
    jsonp: "callback",
    success: function (data) {
        var data = data.data.hotList
        var str = "";
        var inner = $("#con_pc_1");
        for(var i=0;i<data.length;i++){
            str += `<li><a href="##" class="ajump" title="NBA 2K19" data-id="${data[i].linkId}">
                            <img src="${data[i].imgUrl}">
                        </a>
                        <span class="buy_btn">加入购物车</span>
                    </li>`
        }
        
        inner.append(str)
        var addcar = $(".three-box-center>#con_pc_1>li>span");
        var detail = $(".three-box-center>#con_pc_1>li>a>img");
        var a = new Detail(addcar,detail);
        a.init();
        
    },
    error: function (e) {
        console.log(e)
    }
})

$.ajax({
    type: "post",
    url: "/index/floor-105.do",
    dataType: "json",
    data: {
        wd: ""
    },
    jsonp: "callback",
    success: function (data) {
        //data = JSON.parse(data);
        var data = data.data.hotList
        //console.log(data.data.floorTitle)
        var str = "";
        var inner = $("#con_pc_2");
        for(var i=0;i<data.length;i++){
            str += `<li>
                        <a href="##" class="ajump"  title="NBA 2K19" data-id="${data[i].linkId}">
                            <img src="${data[i].imgUrl}">
                        </a>
                        <span class="buy_btn">加入购物车</span>
                    </li>`
        }
        
        inner.append(str)
        var addcar = $(".three-box-center>#con_pc_2>li>span");
        var detail = $(".three-box-center>#con_pc_2>li>a>img");        
        var a = new Detail(addcar,detail);
        a.init();
        
    },
    error: function (e) {
        console.log(e)
    }
})

$.ajax({
    type: "post",
    url: "/index/floor-108.do",
    dataType: "json",
    data: {
        wd: ""
    },
    jsonp: "callback",
    success: function (data) {
        //data = JSON.parse(data);
        var data = data.data.hotList
        //console.log(data.data.floorTitle)
        var str = "";
        var inner = $("#con_pc_3");
        for(var i=0;i<data.length;i++){
            str += `<li>
            <a href="##" class="ajump"  title="NBA 2K19" data-id="${data[i].linkId}">
                <img src="${data[i].imgUrl}">
            </a>
            <span class="buy_btn">加入购物车</span>
        </li>`
        }
        
        inner.append(str)
        var addcar = $(".three-box-center>#con_pc_3>li>span");
        var detail = $(".three-box-center>#con_pc_3>li>a>img");
        var a = new Detail(addcar,detail);
        a.init();
        
    },
    error: function (e) {
        console.log(e)
    }
})

//点击加入购物车ajax请求数据
function Detail(addcar,detail){
    //先获取热卖 近期上市 限时特价
    this.hot = $(".shop-index-three-qh-menu>div");
    this.oul = $(".three-box-center>ul");
    //购物车按钮
    this.ad = addcar;
    //a标签按钮
    this.detail = detail;
}
Detail.prototype = {
    init:function(){
        this.over();
        this.add();  //这个数据是在ajax里获取的  因为是在ajax里进行渲染的
        this.getdata();
    },
    //导航栏
    over:function(){
        var _this = this;
        this.hot.mouseover(function(){
        //$(this).index()
            _this.oul.eq($(this).index()).show().siblings().hide();
            $(this).addClass("add").siblings().removeClass("shop-index-three shop-index-three-tit shop-index-three-qh-menu add");
        })
    },
    add:function(){
        this.ad.click(function(){
            prodid = $(this).prev().attr('data-id');
            prodimg = $(this).prev().children("img").attr("src");
            $.ajax({
                type:"get",
                url:"/car",
                data:{
                    id:prodid,
                    img:prodimg,
                    num:1,
                },
                success:function(data){
                    console.log(data);
                },
                error:function(e){
                    console.log(e);
                }
            })
        })
    },
    //点击商品图片 将商品的信息保存到另外一个json文件中然后跳转到详情页 然后在详情页里将这个数据进行渲染
    getdata:function(){
        this.detail.click(function(){
            prodid = $(this).parent().attr("data-id");
            prodimg = $(this).attr("src");
            location.href = 'detail.html?id=' + prodid;
            $.ajax({
                type:"get",
                url:"/car/detail",
                data:{
                    id:prodid,
                    img:prodimg
                },
                success:function(){
                    console.log(data);
                },
                error:function(e){
                    console.log(e);
                }
            })
        })
    }
}

