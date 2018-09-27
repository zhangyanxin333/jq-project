$.ajax({
    type: "get",
    url: "/pc/realtime_news/",
    dataType: "json",
    jsonp: "callback",
    success: function (data) {
        var str = "";
        data = data.data;
        for (var i = 0; i < data.length; i++) {
            str += `<li><span>08-29</span><a href="##" title="${data[i].title}" target="_blank">
                    <font>${data[i].title}</font>
                    </a></li>`
        }
        var ul = $(".shop-index-gonggao-box>ul");
        ul.append(str);
    },
    error: function (e) {
        console.log(e)
    }
})