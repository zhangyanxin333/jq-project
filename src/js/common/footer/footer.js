function Foot(container){
    this.el = container;
}
//foot模版
Foot.Template = `<div class="shop-footer-xian">
<div class="shop-footer-box" id="shop-footer-box">
    <div class="clear_10"></div>
    <div class="shop-footer-box-left">
        <em></em>
        <p><span class="footer-tit yahei">客服中心</span></p>
        <p>客服在线时间：09:00 - 21:00</p>
        <p><span>客服QQ:</span><i title="客服QQ" class="shop-footer-qq" id="footer_qykf"></i></p>
        <p>客服电话：400-072-2815</p>
    </div>
    <div class="shop-footer-box-right">
        <ul>
            <li><span>| 凤凰游戏商城APP</span></li>
            <li><img src="../img/app.png" style="width: 83px; margin-top: 8px; margin-left: 8px; opacity: 1;"></li>
        </ul>
        <ul>
            <li><span>| 官方微信</span></li>
            <li><img src="../img/wx.jpg" style="opacity: 1;"></li>
        </ul>
        <ul>
            <li><span>| 官方微博</span></li>
            <li><a href="##" target="_blank"><img src="../img/wb.jpg" style="opacity: 1;"></a></li>
            <li><a target="_blank" href="##"><img src="../img/sina.png" style="opacity: 1;"></a></li>
        </ul><a target="_blank" href="##">
        </a>
        <ul><a target="_blank" href="##">
                <li><span>| 购物指南</span></li>
            </a>
            <li><a target="_blank" href="##"></a><a href="##" target="_blank">会员注册</a></li>
            <li><a href="##" target="_blank">购物流程</a></li>
            <li><a href="##" target="_blank">订单查询</a></li>
        </ul>
        <ul>
            <li><span>| 支付方式</span></li>
            <li><a href="##" target="_blank">支付宝</a></li>
            <li><a href="##" target="_blank">网上银行</a></li>
            <li><a href="##" target="_blank">微信</a></li>
        </ul>
        <ul>
            <li><span>| 配送方式</span></li>
            <li><a href="##" target="_blank">配送收费</a></li>
            <li><a href="##" target="_blank">配送政策</a></li>
            <li><a href="##" target="_blank">配送方式</a></li>
        </ul>
        <ul>
            <li><span>| 售后服务</span></li>
            <li><a href="##" target="_blank">退换货政策</a></li>
            <li><a href="##" target="_blank">收货说明</a></li>
        </ul>
        <ul>
            <li><span>| 客服互动</span></li>
            <li><a href="" target="_blank">在线客服</a></li>
            <li><a href="" target="_blank">常见问题</a></li>
        </ul>
    </div>
</div>
<div class="shop-footer-cprt" style="padding-bottom: 8px">
    <a href="##">关于凤凰</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="##">凤凰历程</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="##">联系我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
        href="##">合作平台</a>
</div>
<div class="shop-footer-cprt" style="padding-bottom: 8px">
    凤凰传媒(SH601928)旗下网站 ：凤凰游戏
</div>

<div class="shop-footer-cprt">
    CopyRight © 2012-2018 fhyx.com 杭州凤侠网络科技有限公司 All Right Reserved 浙ICP备12018679号-9 </div>
</div>`
//扩展方法
$.extend(Foot.prototype,{
    init:function(){
        // 创建空的div  获取内容将内容添加到div中 
        this.create();
    },
    create:function(){
        this.content = $("<div></div>");
        this.content.html(Foot.Template);
        this.el.append(this.content)
    }   
})

