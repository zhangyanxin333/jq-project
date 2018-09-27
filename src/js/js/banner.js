function Banner(){
    //获取元素 banner(鼠标划过事件) li(轮播原理) btn(点击事件)  不能函数嵌套函数
    this.banner = $(".ali-photo-carousel-pic");
    this.ali = $(".ali-photo-carousel-pic>li");
    this.btn = $(".ali-photo-carousel-pic-num>ul>li");
    this.inow = 0;
    this.next = 0;
    this.timer = null;
}
Banner.prototype = {
    init:function(){
        this.autoplay();
        this.toimg();
        this.stop();
        this.start();
        this.over();
    },
    stop:function(){
        var _this = this;
        this.banner.mouseover(function(){
            clearInterval(_this.timer);
        })
    },
    start:function(){
        var _this = this;
        this.banner.mouseout(function(){
            _this.autoplay()
        })
    },
    over:function(){
        
        this.btn.mouseover(function(){
            $(this).css({
                "backgroundPosition":"-22px -363px",
            }).siblings().css({"backgroundPosition":"-2px -363px"})
        })
    },
    out:function(){

    },
    autoplay:function(){
        var _this = this;
        this.timer = setInterval(function(){
            if(_this.next == _this.ali.length-1){
                _this.next = 0
            }
            else{
                _this.next++
            }
            _this.toimg()
        },2000)
    },
    toimg:function(){
        this.ali.eq(this.inow).stop().fadeTo(1000,0);
        this.ali.eq(this.next).stop().fadeTo(1000,1);
        this.inow = this.next;
    }
}
var banner = new Banner();
banner.init()
