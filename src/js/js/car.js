//渲染数据
$.ajax({
    type: "get",
    url: "/car/render",
    data: {},
    success: function (data) {
        data = JSON.parse(data);
        var str = "";
        for (var key in data) {
            str += `
                <div class="shop-car-box-list-tr car-list-box">
                    <div class="car-chk">
                        <input type="checkbox" name="car_pid[]" class="common_check_input list_shop" value="4475"
                            data-id="${data[key].id}" shop-id="184177">
                    </div>
                    <div class="car-item"><a href="" target="_blank"><img src="${data[key].img}" style="opacity: 1;"></a>
                        <p><a href="" target="_blank">幻想三国志5 PC版 中文 数字版</a></p>
                    </div>
                    <div class="car-price" id="shop_price_4475">65.00</div>
                    <div class="car-num">
                        <div class="fx-num-jj"><a class="reduce_new" href="##" data-id="${data[key].id}">-</a><input
                                type="text" name="car_pnum_4475" value="${data[key].num}" id="num_4475" class="text common_shop_num shop_num"
                                max="18289" data-id="${data[key].id}"><a class="add" href="##" data-id="${data[key].id}">+</a></div>
                    </div>
                    <div class="car-sum" id="totalprice_4475">65</div>
                    <div class="car-op"><a href="##" data-id="${data[key].id}" class="delete_shop">删除</a></div>
                </div>`
        }
        var ul = $(".shop-car-box-con");
        ul.append(str);
        //context = $(".car-list-box");
        //console.log(context);
    },
    error: function (e) {
        console.log(e);
    }
})

function Dela(){
    this.parent = $(".shop-car-box-con");
    this.delAll = $("#checkbox_all_bottom_new");
    this.check = $("#checkbox_all_top_new"); //全选input    
    //console.log(this.select);
}
$.extend(Dela.prototype,{
    init:function(){
        this.addop();
        this.reduceop();
        this.all();
        //this.fanxuan();
        //this.dela();
        this.getTr();
        this.del();
        this.option();
        this.delall();
    },
    addop:function(){
        this.parent.on("click",".add",function(){
            var value = $(this).prev().val();
            value++;
            $(this).prev().val(value);
            //单价
            var price = $(this).parent().parent().prev().text();
            //获取总价
            var sum = $(this).parent().parent().next().text();
            $(this).parent().parent().next().text(value * price);
            var prodid = $(this).prev().attr("data-id");
            $.ajax({
                type:"get",
                url:"/car/add",
                data:{
                    id:prodid,
                    num:value
                },
                success:function(data){
                    console.log(data);
                },
                error:function(e){
                    console.log(e);
                }
            });
          //  this.getTr();
        })
    },
    reduceop:function(){
        this.parent.on("click",".reduce_new",function(){
            var value = Number($(this).next().val());
            console.log(value);
            if (value > 1) {
                value--;
                $(this).next().val(value);
            };
            //单价
            var price = $(this).parent().parent().prev().text();
            //获取总价
            var sum = $(this).parent().parent().next().text();
            $(this).parent().parent().next().text(value * price);
            var prodid = $(this).attr("data-id");
            $.ajax({
                type:"get",
                url:"/car/reduce",
                data:{
                    id:prodid,
                    num:value
                },
                success:function(data){
                    console.log(data);
                },
                error:function(e){
                    console.log(e);
                }
            });
            this.getTr();            
        })
    },
    all:function(){
        //当点击全选按钮的时候获取所有的input的输入框 通过给全选框添加on事件来获取
        var _this = this;
        this.check.on("click",function(){
            this.allcheck = $(".list_shop"); //input  
            //console.log(this.allcheck)  
            if($(this).prop("checked")){
                //console.log(_this.delAll)
                //console.log(this.allcheck)
                _this.delAll.prop("checked","checked");
                for(var i=0;i<this.allcheck.length;i++){
                    this.allcheck.prop("checked","checked");
                }
            }
            else{
                _this.delAll.prop("checked","");
                for(var i=0;i<this.allcheck.length;i++){
                    this.allcheck.prop("checked","");
                }
            }
        })
        this.getTr();
    },
    option:function(){
        //反选
        var _this = this;
        this.parent.on("click",".list_shop",function(){
            var s = $(".list_shop").length;
            var a = $(".list_shop:checked").prop("checked", "checked").length;
            if (s == a) {
                _this.check.prop("checked", "checked");
                _this.delAll.prop("checked", "checked");
            } else {
                _this.check.prop("checked", "");
                _this.delAll.prop("checked", "");
            }
        })
        this.getTr();
    },
    del:function(){
        this.parent.on("click",".delete_shop",function(){
            //this.getTr();            
            
            var prodid = $(this).attr("data-id");            
            $(this).parent().parent().remove();
            $.ajax({
                type:"get",
                url:"/car/del",
                data:{
                    id:prodid,
                    //num:value
                },
                success:function(data){
                    console.log(data);
                },
                error:function(e){
                    console.log(e);
                }
            });
        })
    },
    delall:function(){
        var _this = this;
        this.delAll.on("click",function(){
            this.allcheck = $(".list_shop"); //input  
            //console.log(this.allcheck)  
            if($(this).prop("checked")){
                //console.log(_this.delAll)
                //console.log(this.allcheck)
                _this.check.prop("checked","checked");
                for(var i=0;i<this.allcheck.length;i++){
                    this.allcheck.prop("checked","checked");
                }
            }
            else{
                _this.check.prop("checked","");
                for(var i=0;i<this.allcheck.length;i++){
                    this.allcheck.prop("checked","");
                }
            }
        })
    },
    getTr:function(){
        var start = Number(0);
        var price = Number(0);
        //context = document.querySelectorAll(".car-list-box");  //未来元素
        var xiaoji = document.getElementById("products_sum_num");
        var amount = document.getElementById("products_sum_money");
        this.parent.on("click",".list_shop",function(){
            if($(".car-list-box").prop("checked","checked")){
                 //获取商品数量
                var numval = Number($(this).parent().next().next().next().children().children("input").val());
                start += numval;
                //获取总价
                var tprice =  Number($(this).parent().next().next().next().next().text());
                price += tprice;
                console.log(start,price)
            }
            xiaoji.innerHTML = start;
            console.log(xiaoji.innerHTML)
            amount.innerHTML = price;
        })
    },
}),

new Dela().init();
