

$(function () {
    var timer1 = 0;
    var timer2 = 0;
    var canvas = null;



    $('#content .DDD .team > li').mouseenter(function () {

               $('#content .DDD .team > li').css('opacity','.2');
               $(this).css('opacity','1');
               addCanvas();
               $('canvas').offset({left:$(this).offset().left})
    })



    function addCanvas() {

        if(!canvas){
            $('#content .DDD .team_wrap').prepend("<canvas width='337px' height='573px'></canvas>");
            canvas = document.querySelector('canvas');
            /////////离开时 不是离开li 而是上面的canvas
            canvas.onmouseleave =function () {
              removeCanvas();
                $('#content .DDD .team > li').css('opacity','1');
            }



            qipao();
        }

    }
    function removeCanvas() {

     canvas.remove();
       canvas = null ;


       clearInterval(timer1);
       clearInterval(timer2);

    }
    function qipao() {

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

            },80)}

    }















})