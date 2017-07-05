;(function(){
    layui.use('element',function () {
        var element = layui.element();
    })
    $('li.layui-nav-item.layui-nav-item-2').on('click', function() {
        $(this).toggleClass('layui-nav-itemed-2');
        $('dd.layui-this').removeClass('layui-this');
        if ($(this).siblings('li.layui-nav-item.layui-nav-item-2').hasClass('layui-nav-item-2')) {
            $(this).siblings('li.layui-nav-item.layui-nav-item-2').removeClass('layui-nav-itemed');
            $(this).siblings('li.layui-nav-item.layui-nav-item-2').removeClass('layui-nav-itemed-2');
        }
    });

    $('dl.layui-nav-child > dd').on('click', function(e) {
        e.stopPropagation();
        if (!$(this).hasClass('layui-nav-item-2')) {
            $('li.layui-nav-item.layui-nav-item-2').removeClass('layui-nav-itemed');
            $('li.layui-nav-item.layui-nav-item-2').removeClass('layui-nav-itemed-2');
        }
    });


    $(".layui-nav-side a").on("click",function () {
        var url = $(this).data("url");

        if(url){
            $("#page").get(0).src  = url;
        }else{
            return ;
        }
    })



})();