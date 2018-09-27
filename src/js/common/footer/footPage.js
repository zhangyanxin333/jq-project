//用来包含尾部的全部信息
function Footpage(){
    this.el = $("#footer");
}
//扩展方法
$.extend(Footpage.prototype,{
    init:function(){
        this.foot = new Foot(this.el).init()
    }
})
new Footpage().init()

