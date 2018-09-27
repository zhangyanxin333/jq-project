//当鼠标划过li的时候让 li的宽变为1210px  c2的宽变为902  速度 0.7s  每一个小的图片会向左偏移图片索引乘以306的距离(链式操作)
 function SlideToggle(){
    this.wrap = $(".ad-slide-list")
    var speed = 700;
    var me = this;
    $(".ad-slide-list>.item").hover(function(){
        //获取这个元素  它的索引  以及它向左偏移的距离
        var el = $(this);
        var juli = $(this).index() * 306;
        el.stop().animate({
            width:1210
        },speed);
        el.find(".c2").stop().animate({
            width:902
        },speed);
        me.wrap.stop().animate({
            "margin-left":-juli
        },speed)
    },function(){
        var el = $(this);
        me.wrap.stop().animate({
            "margin-left":0
        },speed);
        el.find(".c2").stop().animate({
            width:0
        },speed);
        el.stop().animate({
            width:306
        },speed)
    })
} 
SlideToggle()

