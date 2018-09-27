function Magnifier(){
    this.mimg = $(".jqzoom>img"); // 获取中图所在的区域
    this.simg = $(".minImg"); // 获取小图所在的区域
    this.filter = $(".filter"); //获取盒子
    this.obox = $("#preview");  //获取大格子划过格子的时候放大镜和放大区域都显示
    this.big = $("#max");
    this.bimg = $("#max>img");
    this.size = $(".goods_attr ")//获取款式
    this.oadd = $(".add");
    this.oreduce = $(".reduce");
}
Magnifier.prototype = {
    init:function(){
        var str = "";
	    for(var i=0;i<4;i++){
            str += "<img src='../img/"+(i+1)+"-small.jpg' class='small'  data-url=''>";
        };
        this.simg.html(str);
        this.over();
        this.boxOver();    //鼠标划过格子的时候让放大镜和放大区域都显示
        this.boxOut();
        this.filterMove();
        this.sizeclick();
        this.add();
        this.reduce();
    },
    over:function(){
        this.aimg = $(".minImg>img");
        var _this = this;
        this.aimg.mouseover(function(){
            var src = $(this).attr("data-url");
            _this.mimg.attr("src",src)
            _this.bimg.attr("src",src)
        })
    },
    boxOver:function(){
        var _this = this;
        this.obox.mouseover(function(){
            _this.filter.css("display","block");
            _this.big.css("display","block");
        })
    },
    boxOut:function(){
        var _this = this;
        this.obox.mouseout(function(){
            _this.filter.css("display","none");
            _this.big.css("display","none");
            
        })
    },
    //格子移动的距离  先获取一下鼠标可以划过的距离 然后在获取一下格子实际可以划过的距离
    filterMove:function(){
        var _this = this;
        this.filter.mousemove(function(e){
            var l = e.pageX - _this.obox.offset().left - _this.filter.outerWidth()/2;
            var t = e.pageY - _this.obox.offset().top - _this.filter.outerHeight()/2;
            l = l > _this.obox.outerWidth() - _this.filter.outerWidth()?_this.obox.outerWidth() - _this.filter.outerWidth():(l<0?0:l);
            t = t > _this.obox.outerHeight() - _this.filter.outerHeight()?_this.obox.outerHeight() - _this.filter.outerHeight():(t<0?0:t);
            $(this).css({
                left: l + "px",
                top:t + "px"
            });
            
            _this.bimg.css({
                left: -l + "px",
                top:-t + "px"
            })
        })
    },
    sizeclick:function(){
        this.size.click(function(){
            $(this).addClass("checked").siblings().removeClass("checked");
        })
    },
    add:function(){
        var value;
        this.oadd.click(function(){
            value = $(this).prev().text();
            value++;
            $(this).prev().text(value);
        })
    },
    reduce:function(){
        var value;
        this.oreduce.click(function(){
            value = $(this).next().text();
            if(value>1){
                value--;
                $(this).next().text(value);
            }
            
        })
       
    }
}

new Magnifier().init();

//详情页渲染内容 当点击商品的图片的时候获取商品的图片等等信息 然后保存到json文件中然后在详情页将这些数据进行渲染
function Getimg(){
    this.id = location.href.split("?")[1].split("=")[1];
    this.img = $(".jqzoom>img");
}
Getimg.prototype = {
    init:function(){
        this.getsingal();
    },
    getsingal:function(){
        $.ajax({
            type:"get",
            url:"/car/getdetail",
            //dataType:"json",
            data:{
                id:this.id
            },
            success:function(data){
                this.id = location.href.split("?")[1].split("=")[1];
                this.small = $(".small");
                this.img = $(".jqzoom>img");
                this.aimg = $(".minImg>img")
                for(let key in data){
                    if(data[key].id == this.id){
                        //console.log(this.id,this.img)
                        this.img.attr("src",data[key].img);
                        this.small.attr("src",data[key].img);
                        this.aimg.attr("data-url",data[key].img);
                    }
                }
            },
            error:function(e){
                console.log(e);
            }
        })
    }
}
new Getimg().init();

