var connect = require("gulp-connect");
var gulp = require("gulp");
var proxy = require("http-proxy-middleware");
var css = require("gulp-sass-china")
gulp.task("cssmin",function(){
    gulp.src("src/sass/**/*")
    .pipe(css({
        outputStyle:"compact"
    }))
    .pipe(gulp.dest("src/css"))
})

gulp.task("scss",function(){
    gulp.watch("src/sass/**/*",["cssmin"])
})


gulp.task("server",function(){
    connect.server({
        root:"src",
        port:7754,
        livereload:true,
        middleware: function() {
            return [
        　　　　　　　　　　//需要转发的请求
                 proxy('/index',{
        　　　　　　　　　　　　//代理服务器的路径(协议+主机名)
                    target: 'https://www.hao24.com',
        　　　　　　　　　　　　　//是否改变原始主机头为目标url
                    changeOrigin: true
                }),
                 proxy('/api',{
                    target: 'https://shop.battlenet.com.cn',
                    changeOrigin: true,
                }), 
                //http://www.fhyx.com/api/getcardgame?callback=success_jsonpCallback&_=1537195238133                
                proxy("/getcardgame",{
                    target:"http://www.fhyx.com/api",
                    changeOrigin:true,
                }),
                //https://www.hao24.com/index/floor-104.do
                //代理本地服务器  当访问一个以什么开头的页面时将协议名字代理到其他地方 本地服务
                //购物车：当去点击加入购物车的时候，让ajax去http:localhost:9000请求数据，然后在本地node服务器上进行判断这个url暂时定义为/car/add
                proxy("/car",{
                    target:"http://localhost:9000",
                    changeOrigin:true,
                }),
                proxy("/pc/",{
                    target:"https://www.toutiao.com/api",
                    changeOrigin:true,
                })
            ]
        } 
         
    })
})
gulp.task("server-watch",function(){
    gulp.watch("src/**/*",function(){
        gulp.src("src/**/*")
        .pipe(connect.reload())
    })
})
gulp.task("serverTask",["scss","server","server-watch"])
