$(document).ready(function(){
    /*
     *加载更多
     */
    $(".click-bottom").on("click", function () {
        $(this).find('img').show();
        $(this).find('span').hide();
        setTimeout(list, 1000);
    });
    function list() {
        for (var k = 1; k <= 3; k++) {
            var str = "<div class=\"item\"><img class=\"logo\" src=\"img/item.jpg\"><div class=\"right\"><p class=\"p1\">欢乐斗地主</p><p class=\"p2\">类别/类别/类别</p><p class=\"p3\">欢乐头地主很好玩，很好玩，很好玩，很好玩，很好玩，很好玩，很好玩，很好玩，很好玩，很好玩，很好玩，很好玩</p></div></div>";
            $(".content").append(str);
        }
        $(".click-bottom").find('img').hide();
        $(".click-bottom").find('span').show();
    }
});
