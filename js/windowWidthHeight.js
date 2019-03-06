//
$(function () {
    var $con_h = $('html').height()- $('#head').height();
    var $con_w = $('html').width()

    //5. set  #content ul li  height（初期化）
    $('#content').height($con_h);
    $('#content > ul.list > li').height($con_h);
    $('#content > ul.list').width($con_w);
    $('#content > ul.list > li').width($con_w);

    // 6 when window resize, change W and H
    window.onresize = function () {


        //重新获取长度
        var arrow_transform;
        var $con_h = $('html').height()- $('#head').height();
        var $con_w = $('html').width()


        //6-5. set  #content ul li  height
        $('#content').height($con_h);
        $('#content > ul.list > li').height($con_h);
        $('#content  > ul.list').width($con_w);
        $('#content > ul.list > li').width($con_w);

    }

})

