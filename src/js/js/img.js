//获取所有图片当鼠标划过的时候透明度显示为0.8
function toImg(){
    this.aImg = $("img");
    this.aImg.opacity = 1;
}
toImg.prototype = {
    init:function(){
        this.over();
    },
    over:function(){
        this.aImg.mouseover(function(){
            $(this).fadeTo(1000,0.8)
        })
    }
}
var a = new toImg();
a.init()