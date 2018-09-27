//推荐精选的js请求
$.ajax({
    type: "get",
    url: "/api/recommendation/featured",
    dataType: "json",
    data: {
        wd: ""
    },
    jsonp: "callback",
    success: function (data) {
        data = data.browsingCards
        var str = "";
        //console.log(String(data[0].displayGroupId).slice(3))
        var inner = $(".two-box-left-ul-180");
        for(var i in data){
            str += `
            <li>
                <a href="##">
                    <img src="../img/cont1.gif" alt="">
                    <div class="car-ul-li-box">
                        <p>${data[i].title}</p>
                        <p class="pjiage yahei"><em>¥${String(data[i].displayGroupId).slice(3)}</em></p>
                    </div>
                    <i></i>
                </a>
            </li>`
        }
        /* */
        inner.append(str)
    },
    error: function (e) {
        console.log(e)
    }
})
