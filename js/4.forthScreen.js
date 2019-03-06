//pic boom
;$(function () {

    var $img1 = $('#content >ul > li.CCC .box1 .up');
    var $img2 = $('#content >ul > li.CCC .box2 .up');

    //add four <li>
    for(var i=0;i<4;i++){
        $img1.append('<li></li>');
        $img2.append('<li></li>');
    }

    //per <li> add a <img>
    $('#content >ul > li.CCC .box-wrap li').append('<img>');
    //add the same 'src' and 'address(src="address")' in per <img>
    //jQ中用data('自定义属性名去掉data')来获取attribute
    $img1.find('li img').attr('src',$img1.data('src'))
    $img2.find('li img').attr('src',$img2.data('src'))


    //change  four imgs' position LT RT LB RB
    //这里img1,img2一样大
    var left1 = $img1.width()/2;
    var top1 = $img1.height()/2
    $img1.find('li img').eq(0).css({left:'0px'        ,top:'0px'});
    $img1.find('li img').eq(1).css({left:'-'+left1+'px',top:'0px'});
    $img1.find('li img').eq(2).css({left:'0px'         ,top:'-'+top1+'px'});
    $img1.find('li img').eq(3).css({left:'-'+left1+'px',top:'-'+top1+'px'});

    var left2 = $img2.width()/2;
    var top2 = $img2.height()/2
    $img2.find('li img').eq(0).css({left:'0px'        ,top:'0px'});
    $img2.find('li img').eq(1).css({left:'-'+left2+'px',top:'0px'});
    $img2.find('li img').eq(2).css({left:'0px'         ,top:'-'+top2+'px'});
    $img2.find('li img').eq(3).css({left:'-'+left2+'px',top:'-'+top2+'px'});




    //左上向上移 右上向右移 左下向左移 右下向右移
    //移动的是小块的li
    //移动中 用到transition 但是li没有初始位置 所以没法通过改left和top值来制作动画
    //所以该用transform
    $img1.hover(function () {
        $img1.find('li').eq(0).css('transform','translateY(-'+top1+'px)');
        $img1.find('li').eq(1).css('transform','translateX( '+left1+'px)');
        $img1.find('li').eq(2).css('transform','translateX(-'+left1+'px)');
        $img1.find('li').eq(3).css('transform', 'translateY('+top1+'px)');
    },function () {
        $img1.find('li').css('transform','translate(0)');
    })

    $img2.hover(function () {
        $img2.find('li').eq(0).css('transform','translateY(-'+top2+'px)');
        $img2.find('li').eq(1).css('transform','translateX( '+left2+'px)');
        $img2.find('li').eq(2).css('transform','translateX(-'+left2+'px)');
        $img2.find('li').eq(3).css('transform', 'translateY('+top2+'px)');
    },function () {
        $img2.find('li').css('transform','translate(0)');
    })








})