function Header(container){
    this.el = container;
    //这里是获取到的鼠标划过的相应的对象
    this.olimyshop = $(".ali-header-con-myshop")
    
    //鼠标划过导航栏的时候给每一个li添加一个属性current
    this.otwoli = $("#shop-nav")
    //console(this.otwoli);
}
//扩展属性
Header.Template = `
<div class="ali-header">
<div class="ali-header-con">
    <ul class="ali-header-con-left">
        <li id="shop_login_box">
            <a href="##" class="login_a">亲，请登录</a>
            <a href="##" class="register_a">免费注册</a>
        </li>
    </ul>
    <ul class="ali-header-con-right">
        <li>
            <a href="index.html">凤凰商城首页</a>
        </li>
        <li>
            <div class="menu-hd" style="color:#E5E6E5;">|</div>
        </li>
        <li class="ali-header-con-myshop">
            <div class="menu-hd">
                <a rel="nofollow" href="##">我的商城</a>
                <span class="ali-header-ico ali-header-xia"></span>
            </div>
            <div class="menu-bd">
                <div class="newshop-myshop-box">
                    <a rel="nofollow" href="##">我的订单</a>
                    <a rel="nofollow" href="##">个人资料</a>
                    <a rel="nofollow" href="##">安全设置</a>
                    <a rel="nofollow" href="##">收货地址</a>
                    <a rel="nofollow" href="##">优惠劵</a>
                </div>
            </div>
        </li>
        <li>
            <div class="menu-hd" style="color:#E5E6E5;">|</div>
        </li>
        <li>
            <div class="menu-hd">
                <span class="ali-header-ico my-gwc"></span>
                <a rel="nofollow" href="car.html" style="margin-right:2px;">购物车</a>
                <font id="gwc_num">0</font>
            </div>
        </li>
        <li>
            <div class="menu-hd" style="color:#E5E6E5;">|</div>
        </li>
        <li class="ali-header-con-mysc">
            <div class="menu-hd">
                <span class="ali-header-ico my-shoucang"></span>
                <a rel="nofollow" href="">收藏夹</a>
            </div>
        </li>

        <li>
            <div class="menu-hd" style="color:#E5E6E5;">|</div>
        </li>

        <li>
            <div class="menu-hd">
                <a rel="nofollow" href=""  title="收藏本站">收藏本站</a>
            </div>
        </li>

        <li class="list_nav">
            <div class="menu-hd">
                <a rel="nofollow" href="" class="hover_link">游戏目录</a>
                <span class="h_top"></span>
            </div>
            <div class="header_game">
                <label></label>
                <div class="header_game_con">
                    <div class="header_game_top">
                        <a href="##" target="_blank" title="天命奇御">
                            <img src="../img/hide1.jpg" width="174" height="63"
                                alt="天命奇御">
                        </a>
                        <a href="" target="_blank" title="侠客风云传前传">
                            <img src="../img/hide2.jpg" width="174" height="63"
                                alt="侠客风云传前传">
                        </a>
                        <a href="" target="_blank" title="幻想三国志5">
                            <img src="../img/hide3.jpg" width="174" height="63"
                                alt="幻想三国志5">
                        </a>
                        <a href="" target="_blank" title="侠客风云传">
                            <img src="../img/hide4.jpg" width="174" height="63"
                                alt="侠客风云传">
                        </a>
                        <a href="" target="_blank" title="洛川群侠传" style="margin-right:0px;">
                            <img src="../img/hide5.jpg" width="174" height="63"
                                alt="洛川群侠传">
                        </a>
                    </div>
                    <div class="header_game_bottom">
                        <div class="header_game_hot">
                            <div class="header_game_g">热门游戏</div>
                            <div class="header_game_t">
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">古剑奇谭 系列</a>
                                    <i></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">使命召唤 系列</a>
                                    <i class="s_h"></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">绝地求生大逃杀</a>
                                    <i class="s_h"></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">三国志 系列</a>
                                    <i class="s_h"></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">上古卷轴 系列</a>
                                    <i class="s_n"></i>
                                </p>
                            </div>
                            <div class="header_game_t">
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">模拟人生 系列</a>
                                    <i class="s_h"></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">极品飞车 系列</a>
                                    <i class="s_h"></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">英雄无敌 系列</a>
                                    <i></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">仙剑奇侠传 系列</a>
                                    <i></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">FIFA 系列</a>
                                    <i class="s_n"></i>
                                </p>
                            </div>
                            <div class="header_game_t" style="margin-right:0px;">
                                <p>
                                    <em></em>
                                    <a href="/##" target="_blank">刺客信条 系列</a>
                                    <i class="s_h"></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">NBA 2K 系列</a>
                                    <i class="s_h"></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">实况足球 系列</a>
                                    <i class="s_n"></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">真三国无双 系列</a>
                                    <i class="s_n"></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="1368.html" target="_blank">质量效应：仙女座</a>
                                    <i class="s_h"></i>
                                </p>
                            </div>
                            <div class="header_game_t"></div>
                        </div>
                        <div class="header_game_f">
                            <div class="header_game_g">即将上市</div>
                            <div class="header_game_t" style="margin-right:0px;">
                                <p>
                                    <em></em>
                                    <a href="2235.html" target="_blank">古墓丽影：暗影</a>
                                    <i class="s_h"></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="2379.html" target="_blank">正当防卫4</a>
                                    <i class="s_h"></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="1809.html" target="_blank">战地5</a>
                                    <i class="s_n"></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="2375.html" target="_blank">刺客信条：奥德赛</a>
                                    <i class="s_n"></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="2274.html" target="_blank">NBA 2K19</a>
                                    <i class="s_h"></i>
                                </p>
                            </div>
                        </div>
                        <div class="header_game_zk">
                            <div class="header_game_g">折扣促销</div>
                            <div class="header_game_t" style="margin-right:0px;">
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">冷鲜肉</a>
                                    <i class="s_h"></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">雷电5：导演剪辑版</a>
                                    <i></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">尘埃：决战</a>
                                    <i></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">堕落之王</a>
                                    <i></i>
                                </p>
                                <p>
                                    <em></em>
                                    <a href="##" target="_blank">武器店物语</a>
                                    <i></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li>
            <div class="menu-hd">
                <a href="##" id="u179stranlink">繁體中文</a>

            </div>
        </li>


    </ul>

</div>
</div>
<div class="clear_10"></div>
<div class="shop-header">
<div class="shop-header-logo">
    <a href="##">
        <img src="../img/logo.jpg" alt="">
    </a>
</div>
<div class="shop-header-search">
    <div class="shop-header-search-div">
        <div class="shop-header-search-box">
            <form action="">
                <div class="search-left">
                    <span class="ali-header-ico search-ico"></span>
                </div>
                <input type="text" name="" id="" class="search-txt">
                <input type="text" name="" id="" class="search-sub" value="搜索">
            </form>
        </div>
        <div class="shop-header-search-wz">
            <span>热门搜索：</span>
            <a href="##">天命奇御</a>
            <a href="##">幻想三国志</a>
            <a href="##">侠客风云传</a>
            <a href="##">洛川群侠传</a>
            <a href="##">古剑奇谭</a>
            <a href="##">仙剑奇侠传</a>
            <a href="##">英雄无敌</a>                    
        </div>
    </div>
    <div class="shop-header-services">
        <a href="##">
            <img src="../img/shop-services.jpg" alt="">
        </a>
    </div>
</div>
</div>
<div class="shop-nav">
        <div class="shop-nav-box">
            <div class="shop-nav-menu">
                <div class="shop-nav-menu-bd">
                    <i class="shop-ico nav-class"></i>全部商品分类
                </div>
                
                    <div class="clear_5"></div>
                    <!-- 用ajax来渲染数据 -->
                
            </div>
            <ul id="qz_menu_ul">
                <li data-jg="index" class="current"><a href="##">首页</a></li>
                <li data-jg="n" id="qz_menu_1" class=""><a href="##">
                        <h2 class="nostyle style_14">图书音像</h2>
                    </a></li>
                <li data-jg="n" id="qz_menu_2" class=""><a href="##">
                        <h2 class="nostyle style_14">幻三</h2>
                    </a></li>
                <li data-jg="n" id="qz_menu_3" class=""><a href="##">
                        <h2 class="nostyle style_14">侠客</h2>
                    </a></li>
                <li data-jg="n" id="qz_menu_4" class=""><a href="##">
                        <h2 class="nostyle style_14">PC</h2>
                    </a></li>
                <li data-jg="n" id="qz_menu_5" class=""><a href="##">
                        <h2 class="nostyle style_14">PS4</h2>
                    </a></li>
                <li data-jg="n" id="qz_menu_6" class=""><a href="##">
                        <h2 class="nostyle style_14">Xbox One</h2>
                    </a></li>
                <li data-jg="n" id="qz_menu_7" class=""><a href="##">
                        <h2 class="nostyle style_14">网游点卡</h2>
                    </a></li>

                <li data-jg="n" style="float:right;width:150px;margin-left: 30px">
                    <a class="head_mobile" style="width:150px" href="##" target="_blank"><img src="../img/head_beta.png"></a>
                </li>

                <li data-jg="n" style="float:right;width:150px" class=""><a style="width:150px" href="##" target="_blank">香港凤凰游戏商城</a></li>


            </ul>
        </div>
    </div>`
$.extend(Header.prototype,{
    init:function(){
        this.createHeader();
    },
    createHeader:function(){
        this.content = $("<div></div>");
        this.content.html(Header.Template);
        this.el.append(this.content)
    },
    //鼠标划过我的商城的时候 二级菜单显示 移除消失
    navover:function(){
        
    },
    naveout:function(){
        
    },
    twoover:function(){
        
    }

})



//


