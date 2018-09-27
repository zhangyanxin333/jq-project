/*这里的主要目标是建立一个node服务器  当访问购物车列表页的时候先去访问json文件看json文件里是否有数据如果有将其渲染进去
    如果没有的话当访问list列表页时执行一些操作
*/
const http = require("http");
const fs = require("fs");
const url = require("url");
//使用箭头函数
http.createServer((req, res) => {
    const {
        pathname,
        query
    } = url.parse(req.url, true);
    if (pathname == "/car") {
        //fs.writeFile("../../json/data1.json",,(err)=>{console.log(err)});
        fs.readFile("../../json/data.json", (err, data) => {
            //读文件默认返回bubble类型将其转换为字符串
            var str = data + '';
            //判断 当点击加入购物车按钮的时候获取商品的id 与json文件中的id进行对比如果id相同的话进行++否则的话进行重新赋值
            if(str){    //如果json文件中有内容并且json文件里的id与点击商品的id相同进行++ 
                var obj = JSON.parse(str);
                var bstop = true;   //如果有内容但是id不同进行重新赋值
                for(var key in obj){
                    if(obj[key].id == query.id){
                        obj[key].num++;
                        //将其写入json文件中
                        fs.writeFile("../../json/data.json",JSON.stringify(obj),(err)=>{})
                        bstop = false;
                        //写头部请求 相应回复  请求信息
                        res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                        var msg={info:"添加成功",status:1};
                        res.end(JSON.stringify(msg));
                    }
                }
                if(bstop){
                    obj.push(query);
                    fs.writeFile("../../json/data.json",JSON.stringify(obj),(err)=>{})
                    res.writeHead(200,{"content-type":"application/json;charsrt=utf8"});
                    var msg={info:"添加成功",status:1};
                    res.end(JSON.stringify(msg))
                }
            }
            else{
                var arr = [];
                arr.push(query);
                fs.writeFile("../../json/data.json",JSON.stringify(arr),(err)=>{})
                res.writeHead(200,{"content-type":"application/json;charsrt=utf8"});
                msg={info:"添加成功",status:1};
                res.end(JSON.stringify(msg))
            }
        })
    }
    //当点击商品的图片的时候将其加入到json1文件中 
    else if(pathname == "/car/detail"){
        fs.readFile("../../json/data1.json",(err,data)=>{
            var str = data + "";
            if(str){
                var arr = JSON.parse(str);
                var bstop = true;
                for(var key in arr){
                    if(arr[key].id == query.id){
                        bstop = false;
                    }
                }
                if(bstop){
                    arr.push(query);
                    fs.writeFile("../../json/data1.json",JSON.stringify(arr),(err)=>{})
                    res.writeHead(200,{"content-type":"application/json;charsrt=utf8"});
                    var msg={info:"添加成功",status:1};
                    res.end(JSON.stringify(msg))
                }
            }
            else{
                var arr = [];
                arr.push(query);
                fs.writeFile("../../json/data1.json",JSON.stringify(arr),(err)=>{})
                res.writeHead(200,{"content-type":"application/json;charsrt=utf8"});
                var msg={info:"添加成功",status:1};
                res.end(JSON.stringify(msg))
            }
        })

    }
    //根据传过来的id到json1文件里获取图片等等信息 然后在将其传出去并在detail。js中进行渲染
    else if(pathname == "/car/getdetail"){
        fs.readFile("../../json/data1.json",(err,data)=>{
            var str = data + "";
            var arr = JSON.parse(str);
            for(var key in arr){
                if(arr[key].id == query.id){
                    res.writeHead(200,{"content-type":"application/json;charsrt=utf8"});
                    res.end(JSON.stringify(arr));
                }
            }
        })
    }
    //这里是用来将数据渲染到购物车 接口是 /add
    else if(pathname == "/car/render"){
        fs.readFile("../../json/data.json",(err,data)=>{
            var str = data + '';
            res.writeHead(200,{"content-type":"application/json;charset=utf8"});
            res.end(JSON.stringify(str));
            
        })
    }
    else if(pathname == '/car/add'){
        fs.readFile("../../json/data.json",(err,data)=>{
            var str = data + '';
            var arr = JSON.parse(str);
            //console.log(arr)
            for(var key in arr){
                if(arr[key].id == query.id){
                    arr[key].num++;
                    fs.writeFile("../../json/data.json",JSON.stringify(arr),(err)=>{});
                    res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                    var msg={info:"添加成功",status:1};
                    res.end(JSON.stringify(msg))
                }
            }
        })
    }
    else if(pathname == '/car/reduce'){
        fs.readFile("../../json/data.json",(err,data)=>{
            var str = data + '';
            var arr = JSON.parse(str);
            //console.log(arr)
            for(var key in arr){
                if(arr[key].id == query.id){
                    if(arr[key].num >1){
                        arr[key].num--;
                    }
                    fs.writeFile("../../json/data.json",JSON.stringify(arr),(err)=>{});
                    res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                    var msg={info:"添加成功",status:1};
                    res.end(JSON.stringify(msg))
                }
            }
        })
    }
    else if(pathname == "/car/del"){
        fs.readFile("../../json/data.json",(err,data)=>{
            var str = data + '';
            var arr = JSON.parse(str);
            //console.log(arr)
            for(var key in arr){
                if(arr[key].id == query.id){
                    arr.splice(key,1)
                    fs.writeFile("../../json/data.json",JSON.stringify(arr),(err)=>{});
                    res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                    var msg={info:"添加成功",status:1};
                    res.end(JSON.stringify(msg));
                }
            }
        })
    }
    //这里是用来验证登录信息的
    else if(pathname == "/car/login"){
        fs.readFile("../../json/usermsg.json",(err,data)=>{
            var str = data + '';
            var arr = JSON.parse(str);
            var bstop = true;
            for(var key in arr){
                if(arr[key].username == query.username && arr[key].password == query.password){
                    console.log("nihaoa ")
                    res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                    var msg = {info:"登录成功",status:1};
                    res.end(JSON.stringify(msg));
                    bstop = false;
                }
            }
            if(bstop){
                res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                var msg = {info:"登录失败",status:0};
                res.end(JSON.stringify(msg));
            }
        })
    }
    else if(pathname == "/car/register"){
        fs.readFile("../../json/usermsg.json",(err,data)=>{
            var str = data + "";
            if(str){
                var arr = JSON.parse(str);
                var bstop = true;
                for(var key in arr){
                    if(arr[key].username == query.username){
                        res.writeHead(200,{"content-type":"application/json;charsrt=utf8"});
                        var msg = {"info":"用户名已存在",status:0}
                        res.end(JSON.stringify(msg));
                        bstop = false;
                    }
                }
                if(bstop){
                    arr.push(query);
                    fs.writeFile("../../json/usermsg.json",JSON.stringify(arr),(err)=>{})
                    res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                    var msg = {info:"注册成功",status:1};
                    res.end(JSON.stringify(msg));
                }
            }
            else{
                var arr = [];
                var obj = {};
                obj.username = query.username;
                obj.password = query.password;
                arr.push(obj);
                fs.writeFile("../../json/usermsg.json",JSON.stringify(arr),(err)=>{})
                res.writeHead(200,{"content-type":"application/json;charsrt=utf8"});
                var msg={info:"注册成功",status:1};
                res.end(JSON.stringify(msg))
            } 
        })
    }
    
}).listen(9000)
console.log("准备就绪");
