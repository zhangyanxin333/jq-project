//当点击登录的时候获取用户名和密码（正则判断两个条件都成功） 然后再去node服务器上请求数据如果用户名和密码全部匹配跳转
function User(){
    this.username = $("#LoginForm_username");
    this.pwd = $("#LoginForm_password");
    this.btn = $(".J_Submit");
}
User.prototype = {
    init:function(){
        this.login();
    },
    login:function(){
        var _this = this;
        this.btn.click(function(){
            this.userval = _this.username.val();
            this.pwdval = _this.pwd.val();
            //三个都是匹配用户名的
            var re1 = /^\d{11}$/;
            var re2 = /^[a-zA-Z]\w{5,16}/;
            var re3 = /^\w+@[a-z0-9]{2,3}(\.com|\.cn)+$/;
            var re4 =  /^[a-zA-Z]\w{5,16}/;
            if((re1.test(this.userval) || re2.test(this.userval) || re3.test(this.userval)) && re4.test(this.pwdval)){
                $.ajax({
                    type:"get",
                    url:"/car/login",
                    data:{
                        username:this.userval,
                        password:this.pwdval
                    },
                    success:function(data){
                        console.log(data)
                         if(data.status == 1){
                            location.href = "index.html"
                        }
                        else{
                            alert(data.info);
                        } 
                        
                    },
                    error:function(e){
                        console.log(e)
                    }
                })
            }
            else{
                alert("用户名或密码不正确");
            }
        })
    }
}
    

new User().init();