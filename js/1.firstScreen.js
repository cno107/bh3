



$(function () {

})
    // home3D(); 开机动画结束后调用

var index = 0;
var old_index = 0;
var timer3D;
var auto_index = 0;

function home3D() {
    var $btnLiNode = $('#content .home_p .btn li ');
    var $pageLi = $('#content .home_p .layer li ');

    $btnLiNode.click(function () {
        clearInterval(timer3D);


        index = $(this).index();  //4个btn编号


        //change btn style
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        //remove p1 visibility
        $('.layer > li.xianshi').removeClass('xianshi');


        //definte (L to R)  or (R to L)

        // (L to R)
        //hide first  page (if current page is firstPage , show it)
        if(old_index < index){
            $pageLi.removeClass('leftShow');
            $pageLi.removeClass('rightHide');
            $pageLi.removeClass('rightShow');
            $pageLi.removeClass('leftHide');
            $pageLi.eq(index).addClass('rightShow');
            $pageLi.eq(old_index).addClass('leftHide');

        }
        // (R to L)
        if(old_index > index){

            $pageLi.removeClass('leftShow');
            $pageLi.removeClass('rightHide');
            $pageLi.removeClass('rightShow');
            $pageLi.removeClass('leftHide');

            $pageLi.eq(index).addClass('leftShow');


            $pageLi.eq(old_index).addClass('rightHide');
        }




        old_index = index ;//old_index应该在被赋予new value之前使用

        auto_index = index;

       console.log(auto_index+'~');
        auto();
    })
////////////////////////////////////////////////
    auto();
    function auto() {
        clearInterval(timer3D);  //清除用clearInterval   启动用 把counter封装在一个函数里调用！important 开局就清定时器

        timer3D = setInterval(function () {
            auto_index ++ ;
            if(auto_index === $pageLi.length){
                auto_index = 0 ;
            }

            $pageLi.removeClass('leftShow');
            $pageLi.removeClass('rightHide');
            $pageLi.removeClass('rightShow');
            $pageLi.removeClass('leftHide');
            $pageLi.eq(auto_index).addClass('rightShow');
            $pageLi.eq(old_index).addClass('leftHide');

            $btnLiNode.eq(auto_index).siblings('li').removeClass('active');
            $btnLiNode.eq(auto_index).addClass('active');

            //remove p1 visibility
            $('.layer > li.xianshi').removeClass('xianshi');

            old_index = auto_index; //同步
        },2500)
    }


    $('#content .home_p .layer li')
        .mouseenter(function () {
            clearInterval(timer3D);
        })
        .mouseleave(function () {
            auto();
        })





}

