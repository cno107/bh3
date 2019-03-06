var now = 0;//current page's index;
var scroll_timer //多次滚轮只触发一次切屏 通过清除上一次事件来达到只触发最后一次事件
var arrow_transform;
$(function () {

    //1.小箭头在home的正下方
    var $home_L = $('#head nav li.home  .down').offset().left;
    $('#head .arrow').css('left',$home_L);

    //2.mouse click change arrow's position
    $('#head nav li  a').click(function () {
        var i = $(this).index('#head nav a'); ////////////////////////////////////important
        now = 4 - i ;    //没点之前now为初始值0；点击之后的now的值 可以被scroll函数读取
        console.log(now);

        move(now);
    })
    //3点击dot 切屏
    $('#content > ul.dot > li').click(function () {
        now = $(this).index('ul.dot > li');
        move(now); //move函数中有切换dot的class
    })

    // //4.小箭头在home的正下方(初期)
    // var $home_L = $('#head nav li.home  .down').offset().left;
    // $('#head .arrow').css('left',$home_L);






})





//7.srcoll
$(function () {

    var content = document.querySelector('#content')
    console.log(content);
    content.onmousewheel =function (ev) {
        ev = ev || event;
        clearTimeout(scroll_timer);
        scroll_timer = setTimeout(function () {
            fn(ev);
        },50)



    } ;   //ff以外
    content.addEventListener('DOMMouseScroll',function (ev) {
        ev = ev || event;
        clearTimeout(scroll_timer);
        scroll_timer = setTimeout(function () {
            fn(ev);
        },50)
    }); //ff
})







//包装函数
function fn(ev) {
    // debugger

    var dir = '';
    if(ev.wheelDelta){
        dir = ev.wheelDelta > 0 ? 'up' : 'down' ;
    }
    if(ev.detail){
        dir = ev.detail > 0 ? 'down' : 'up';
    }
    //功能
    switch (dir) {
        case 'up' :
            if(now<4) {
                now++
                $('#content > ul.list > li').css('transform', 'translateY(' + - now  * ($('html').height() - $('#head').height()) + 'px)');
                move(now);
            }

            ;break;
        case 'down' :
            if(now>0) {
                now--
                $('#content > ul.list > li').css('transform', 'translateY(' + - now  * ($('html').height() - $('#head').height()) + 'px)');
                console.log(now);
                move(now);
            }
            ;break;
    }

    ev.preventDefault && ev.preventDefault();
    ev.stopPropagation && ev.stopPropagation();
    return false;
}
function move(now) {


    var now_a = $('#head nav li  a')[4 - now] //js对象
    var $up = $(now_a).find('.up');  // js ==> jQuery
    $('#head .up').css('width', '0')
    $up.css('width', '100%')

    $('#content > ul.list > li').css('transform','translateY('+-now* ($('html').height()- $('#head').height())+'px)');


    var $down = $(now_a).find('.down')
    var $nav_L = $down.offset().left + $down.width() / 2 - $('#head .arrow').width() / 2;
    var currentP = $('#head .arrow').offset().left;
    clearInterval(arrow_transform)
    arrow_transform = setInterval(function () {

        if (currentP < $nav_L) {
            currentP += 1;
            $('#head .arrow').css('left', currentP);
        }
        if (currentP > $nav_L) {
            currentP -= 1;
            $('#head .arrow').css('left', currentP);
        }
        if (currentP === $nav_L) {
            clearInterval(arrow_transform);
        }

    })


    //右侧dot
    $('#content > ul.dot > li').removeClass('active');
    $('#content > ul.dot > li').eq(now).addClass('active');

    //出入场函数调用
    //每次进页面上清掉所有入场（即all执行退场）
    for(var i=0;i<entryAnime.length;i++){
        entryAnime[i]["outAn"]();
    }
    //当前进入的界面添加入场
    if (entryAnime[now] && typeof  entryAnime[now]["inAn"] === 'function') {
        entryAnime[now]["inAn"]();
    }


}


