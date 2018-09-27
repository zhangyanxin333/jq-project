//当点击注册按钮的时候获取手机号码和密码 然后先用正则判断一下如果满足条件的话将其存到json文件中然后跳转登录页面让其登录
function Reg() {
    this.tel = $(".tel");
    this.pwd = $(".pwd");
    this.btn = $(".btn_regist");
}

Reg.prototype = {
    init: function () {
        this.register();
    },
    register: function () {     
        var _this = this;                                                                                                                                                  
        this.btn.click(function () {
            this.telval = _this.tel.val();
            this.pwdval = _this.pwd.val();
            //三个都是匹配用户名的
            var re1 = /^\d{11}$/;
            var re2 = /^[a-zA-Z]\w{5,16}/;
            var re3 = /^\w+@[a-z0-9]{2,3}(\.com|\.cn)+$/;
            var re4 = /^[a-zA-Z]\w{5,16}/;
            if ((re1.test(this.telval) || re2.test(this.telval) || re3.test(this.telval)) && re4.test(this.pwdval)) {
                $.ajax({
                    type: "get",
                    url: "/car/register",
                    data: {
                        username: this.telval,
                        password: this.pwdval
                    },
                    success: function (data) {
                        if(data.status == 1){
                            alert(data.info);
                            //location.href = "login.html"
                        }
                        else{
                            alert(data.info);
                        }
                        
                    },
                    error: function (e) {
                        alert("用户名已被注册")
                    }
                })
            }
            else{
                alert("用户名或密码匹配失败")
            }
        })

    }
}
new Reg().init();