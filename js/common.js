/**
 * Created by Administrator on 2017/7/5 0005.
 */
//loading效果


 var base = (function (base,$) {
    //loading
    base.loading = function () {
        var html = '<div class="p-loading" style="top:0;position:fixed;height:100%; width:100%;z-index:99999;background:rgba(0,0,0,.5)"> <img style="position:absolute;top:48%;left:48%;" src="../images/loading.gif"  alt=""> <div>'
        //$("body",parent.document).append(html)
        $("body").append(html);
    }
    //loading关闭
    base.loadClose = function(){
        $(".p-loading").hide();
    }
    //跳转页面
    base.page = function (obj) {
        var url = $(obj).data("url");

        $("#page",parent.document).get(0).src = url;
    }


















    return base;
})(window.baseObj || {} ,jQuery);