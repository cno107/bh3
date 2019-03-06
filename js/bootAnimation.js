var draw;
var getData
$(function () {
    //canvas
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



    //bootAnimation
    //模拟图片加载进度条
    bootAnimation();
    function bootAnimation() {
        entryAnime[0]["outAn"](); //开机时先让第一页出去 开机动画打开之后在return让他回来
        // var arr = ['kj_bg1.jpg','kj_bg2.jpg'];
        // var flag = 0;
        var line = document.querySelector('#bootScreen .line');
        // for (var i = 0; i < arr.length; i++) {
        //
        //     var img = new Image();
        //     img.src = "../img2/kj_bg" + arr[i]+".jpg";
        //     console.log(img.src);
        //     img.onload = function () {
        //         flag++;
        //         $('#bootScreen .line').css('width', flag / arr.length * 100 + '%')
        //         debugger;
        //         console.log($('#bootScreen .line').width);
        //     }
        //
        // }
        $(window).mouseenter(function () {
            $('#bootScreen .line').width( $(window).width());
        })


           $('#bootScreen .line').on('transitionend',function () {
               debugger
               $('#bootScreen .up').slideUp('slow')
               $('#bootScreen .down').slideUp('slow')
               $('#bootScreen .line').css('display', 'none');


               remove_boot(); //顺便让第一页回来
           })




    }

//remove bootAnimation
  function remove_boot() {
        setTimeout(function () {
            $('#bootScreen .up').remove();
            $('#bootScreen .down').remove();
            $('#bootScreen .line').remove();
            clearInterval(getData);
            setTimeout(function () {
                $('#bootScreen ').remove();  //所有圆消失后 清除canvas
            },2000);
            entryAnime[0]["inAn"]();  //第一页回来
            home3D();   //在此调用home3D
        },1500);

  }

})