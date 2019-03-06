# Scroll Function

1. 区分FF及其他ブラウザ
2. 普通  **<font color='hotpink'>   onmousewheel      e.wheelDelta </font>**
3. FF   **<font color='hotpink'>   DOMMouseScroll      e.detail</font>**
4. 将两种event指向同一个包装函数fn(ev) ,在fn(ev) 中通过if判断
   **一定要传パラメタev呀！！！**

5. 因为scroll只有up,down两种情况  
   所以用switch(){case:功能;break;}来分别做两种情况下的功能
6. clear system default ev.preventDefault && ev.preventDefault();
   ev.stopPropagation && ev.stopPropagation();
   return false;
7. **PS：** 多次滚动只 slide一次 
   每次触发滚动时使用  **<font color='hotpink'>clearTimeout + setTimeout</font>** 使其每次只触发最后一次

```javascript
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
        case 'up' :功能;break;
        case 'down' :功能;break;
    }

    ev.preventDefault && ev.preventDefault();
    ev.stopPropagation && ev.stopPropagation();
    return false;
}
```