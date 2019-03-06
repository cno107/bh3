# 3D carousel --カルーセル

### css

1. all < li > 初期hidden
2. 给page1加class 使其显示 （在之后的操作中remove）
3. Define four animation ,control by  js/jQ  (class control)   add or remove 操作类
4. Animation: 如果要隐藏的话 初始得显示  100%的时候为最终状态
5. 3,4中 需要操作的类中放入 animation和最终visibility（visibility也可以放在animation 100%处）

```css
@keyframes leftHide {
    from{visibility: visible;}
    50%{transform: translateX(-40%) rotateY(30deg)  scale(.8);}
    to{transform: translateZ(-200px);}
}
@keyframes rightShow {
    from{visibility:hidden;transform: translateZ(-200px);}
    50%{transform: translateX(40%) rotateY(-30deg)  scale(.8);}
    to{}
}
@keyframes leftShow {
    from{visibility:hidden;transform: translateZ(-200px);}

    50%{transform: translateX(-40%) rotateY(30deg)  scale(.8);}
    to{}
}
@keyframes rightHide {
    from{visibility: visible;}
    50%{transform: translateX(40%) rotateY(-30deg)  scale(.8);}
    to{transform: translateZ(-200px);}
}

ul{perspective: 500px;transform-style: preserve-3d;}
li{visibility: hidden; }
li.active{visibility:visible;}
ul.page > li.leftHide{visibility:hidden;animation: 1s leftHide 1 linear;}
ul.page > li.rightShow{visibility:visible;animation: 1s rightShow 1 linear;}
ul.page > li.leftShow{visibility:visible;animation: 1s leftShow 1 linear;}
ul.page > li.rightHide{visibility:hidden;animation: 1s rightHide 1 linear;}
```

---

### js

1. 三个部分： click part               auto part              onmouse stop (auto)  part

2. 外部定义好 counter 及 各种index

3. **click**

   3-1. 遍历为每个btn加index。   arr[i].index = i ;
   3-2. 点击清coutnter，(remove all btn class ，add 点击状态给this)

   3-3.清除当前index 及 上次index 的 animation class

   3-4 判断 new index 和 old 的大小 （aniamtion違う）
   3-5 全て操作が終わった後　old = new index (次操作の時のoldは前回のindex)
   3-6 autoの now = new/old  (3-5よりold === new)   シンクロ
   　　auto3D()起動させる;

4. **auto**  将counter包装在function内 方便以后起动
   4-1 第一步就立刻马上赶紧clearInterval()
   4-2 now为auto的自增index   if （now > length） now = 0
   4-3 动画方向唯一 所以不用判断  remove current&old animation class,そしてadd

   ​    btn也动
   4-4  old シンクロ  now;  クリックする時　その中のoldはautoのnowということ

5. **onmouse stop (auto)**
   ul_p.onmouseenter = function () {clearInterval(timer_3D);}
   ul_p.onmouseleave = function () {auto3D();}

```javascript
window.onload = function () {
    var timer_3D;
    var now = 0;
    var old_index = 0 ;
    var ul_p = document.querySelector('ul.page');
    var li_p = document.querySelectorAll('#wrap ul.page > li');
    var ul_btn = document.querySelector('ul.btn');
    var li_btn = document.querySelectorAll('ul.btn > li');
    home3D();
    function home3D(){
        for(var i=0;i<li_btn.length;i++){
            li_btn[i].index = i;
            li_btn[i].onclick = function () {
                clearInterval(timer_3D);

                for(var i =0 ;i<li_btn.length;i++){
                    li_btn[i].classList.remove("active");
                    this.classList.add("active");
                    li_p[0].classList.remove('active');
                }

                li_p[this.index].classList.remove('rightShow') ;
                li_p[this.index].classList.remove('leftHide');
                li_p[this.index].classList.remove('leftShow') ;
                li_p[this.index].classList.remove('rightHide');

                li_p[old_index].classList.remove('rightShow') ;
                li_p[old_index].classList.remove('leftHide');
                li_p[old_index].classList.remove('leftShow') ;
                li_p[old_index].classList.remove('rightHide');
           if(old_index < this.index){
               li_p[this.index].classList.add('rightShow') ;
                li_p[old_index].classList.add('leftHide');
             }
             if(old_index > this.index){
                 li_p[this.index].classList.add('leftShow') ;
                 li_p[old_index].classList.add('rightHide');
             }

                old_index =  this.index; //old_index在函数最后同步 在此之前old的值一直为上一次的值
                now = this.index
                auto3D();
            }
        }
    }

    auto3D();
    function auto3D(){
        clearInterval(timer_3D);
        timer_3D = setInterval(function () {
            now++ ;
            if(now === li_p.length){
                now = 0 ;
            }

            for(var i =0 ;i<li_btn.length;i++){
                li_btn[i].classList.remove("active");
                li_p[0].classList.remove('active');
            }
            li_btn[now].classList.add("active");

            li_p[now].classList.remove('rightShow') ;
            li_p[now].classList.remove('leftHide');
            li_p[now].classList.remove('leftShow') ;
            li_p[now].classList.remove('rightHide');

            li_p[old_index].classList.remove('rightShow') ;
            li_p[old_index].classList.remove('leftHide');
            li_p[old_index].classList.remove('leftShow') ;
            li_p[old_index].classList.remove('rightHide');

            li_p[now].classList.add('rightShow') ;
            li_p[old_index].classList.add('leftHide');

            old_index =  now; //old_index在函数最后同步 在此之前old的值一直为上一次的值

            // }
        },1500)
    }

    ul_p.onmouseenter = function () {
       clearInterval(timer_3D);
    }
    ul_p.onmouseleave = function () {
        auto3D();
    }
}
```

---

# jQ

```javascript
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
         if(old_index < index){
            $pageLi.removeClass('leftShow');
            $pageLi.removeClass('rightHide');
            $pageLi.removeClass('rightShow');
            $pageLi.removeClass('leftHide');
            $pageLi.eq(index).addClass('rightShow');
            $pageLi.eq(old_index).addClass('leftHide');
            }
       
        if(old_index > index){
             $pageLi.removeClass('leftShow');
            $pageLi.removeClass('rightHide');
            $pageLi.removeClass('rightShow');
            $pageLi.removeClass('leftHide');

            $pageLi.eq(index).addClass('leftShow');


            $pageLi.eq(old_index).addClass('rightHide');
        }




        old_index = index ;//old_index应该在被赋予new value之前使
        auto_index = index;
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
```