# Bubble

1. Core:  两个counter        一个define bubble data    另一个draw

2. Define data      ---------->arr = [{第一个圆的信息},{},{},……]
   2-1. 圆的信息包括：x,y,r   r,g,b,a  deg,starX,starY   k(frequency,amplitude)
   2-2. arr.push({信息})
   2-3. counter time control canvas中　円の密度

3. Draw
   3-1 clear canvas  ! important
   3-2 for(i<arr.length) ———<font color='hotpink'>**逐渐消失**</font>）

   ​    
   　削除 if(arr[i]的某个值) {arr.splice(i,1);}
   3-3.for(i<arr.length)——>可以了 开始画吧

```javascript
var draw;
var getData
 var canvas = document.querySelector('canvas');

    canvas.width = $(window).width();
    canvas.height = $(window).height();


            if(canvas.getContext){
                var ctx = canvas.getContext('2d');

                var arr = [];
                //将arr中的圆画到画布上
               draw =  setInterval(function () {
                    // debugger
                    ctx.clearRect(0,0,canvas.width,canvas.height)
                    //提供动画
                    for(var i=0;i<arr.length;i++) {

                        if(arr[i].alpha < 0) {
                            arr.splice(i,1);
                        }
                        arr[i].r += 2 ;
                        arr[i].alpha -= 0.01;
                    }

                    //将arr中的圆画到画布上
                    for(var i=0;i<arr.length;i++){


                        ctx.save();
                        ctx.fillStyle = 'rgba('+arr[i].red+','+arr[i].green+','+arr[i].blue+','+arr[i].alpha+')';
                        ctx.beginPath();
                        ctx.arc(arr[i].x,arr[i].y,arr[i].r,0,2*Math.PI);
                        ctx.fill();
                        ctx.restore();
                    }

                },1000/60)


                //inject random circles' information
               getData =  setInterval(function () {
                    var x = Math.random()*canvas.width ;
                    var y = Math.random()*canvas.height;
                    var r = 18;
                    var red = Math.round(Math.random()*255);
                    var green = Math.round(Math.random()*255);
                    var blue = Math.round(Math.random()*255);

                    var alpha = 1;
                    arr.push({
                        x : x,
                        y : y,
                        r : r,
                        red:red,
                        green:green,
                        blue:blue,
                        alpha:alpha
                    });

                },50)



            }
```