//这个文件的主要任务是建立一个容器 用来盛放header.js login.js register.js等
function Page(){
    this.el = $("#header")
}
//给page扩展一些方法
$.extend(Page.prototype,{
    init:function(){
        this.header = new Header(this.el).init();
    }
})
new Page().init()