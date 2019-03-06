# Rotate Bubble

1. Core:  两个counter        一个define bubble data    另一个draw

2. Define data      ---------->arr = [{第一个圆的信息},{},{},……]
   2-1. 圆的信息包括：x,y,r   r,g,b,a  deg,starX,starY   k(frequency,amplitude)
   2-2. arr.push({信息})
   2-3. counter time control canvas中　円の密度

3. Draw
   3-1 clear canvas  ! important
   3-2 for(i<arr.length) ———>此处为功能函数（<font color='hotpink'>**sin関数**</font>)

   ​     deg++，获取当前x,y座標、
   　削除 if(arr[i]的某个值) {arr.splice(i,1);}
   3-3.for(i<arr.length)——>可以了 开始画吧

```javascript
function RotateBubble() {
    
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');

        var arr = [];

        //将arr中的圆画到画布上
        timer2 =  setInterval(function () {
            ctx.clearRect(0,0,canvas.width,canvas.height)

            for(var i=0;i<arr.length;i++){
                arr[i].deg+=10;
                // arr[i].x = arr[i].startX + (arr[i].deg*Math.PI/180)*arr[i].xishu/2 ;
                //  arr[i].y  = arr[i].startY + Math.sin( arr[i].deg*Math.PI/180 )*arr[i].xishu*2;

                // arr[i].x = arr[i].startY + Math.sin( arr[i].deg*Math.PI/180 )*arr[i].xishu*2;
                // arr[i].y = arr[i].startX + (arr[i].deg*Math.PI/180)*arr[i].xishu/2 ;

                arr[i].y = arr[i].startY - (arr[i].deg*Math.PI/180)*arr[i].xishu/2 ;
                arr[i].x  = arr[i].startX - Math.sin( arr[i].deg*Math.PI/180 )*arr[i].xishu*3;
                if( arr[i].y<=130){
                    arr.splice(i,1);
                }
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
        timer1 =  setInterval(function () {

            var r = Math.random()*8+2;
            var x = Math.random()*canvas.width ;
            var y = canvas.height - r;

            var red = Math.round(Math.random()*255);
            var green = Math.round(Math.random()*255);
            var blue = Math.round(Math.random()*255);
            var alpha = 1;

            var deg = 0;
            var startX = x;
            var starY = y;
            var xishu = Math.random()*20+15;

            arr.push({
                x : x,
                y : y,
                r : r,
                red:red,
                green:green,
                blue:blue,
                alpha:alpha,
                deg:deg,
                startX:startX,
                startY:starY,
                xishu:xishu,
            });

        },80)}   // 控制canvas圆的密度

}
```