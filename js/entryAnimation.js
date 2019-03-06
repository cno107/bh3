//if 不定义在全局 2.js的move()找不到变量
var entryAnime = [
    {
        inAn:function () {
            var $layer = $('#content ul li.home_p .layer');
            var $btn = $('#content ul li.home_p .btn');

            $layer.css({transform:'translateY(0px)',
                opacity:1   });
            $btn.css({transform:'translateY(0px)',
                opacity:1   });

        },
        outAn:function f() {
            var $layer = $('#content ul li.home_p .layer');
            var $btn = $('#content ul li.home_p .btn');

            $layer.css({transform:'translateY(-500px)',
                opacity:0   });
            $btn.css({transform:'translateY(150px)',
                opacity:0   });


        }
    },
    {
        inAn:function () {
            $('.plane1').css('transform','translate(0px,0px)');
            $('.plane2').css('transform','translate(0px,0px)');
            $('.plane3').css('transform','translate(0px,0px)');
        },
        outAn:function f() {

            $('.plane1').css('transform','translate(-200px,-200px)');
            $('.plane2').css('transform','translate(-200px,200px)');
            $('.plane3').css('transform','translate(200px,-200px)');
        }
    },
    {
        inAn:function () {
            $('.pencil1').css('transform','translate(0px,0px)');
            $('.pencil2').css('transform','translate(0px,0px)');
            $('.pencil3').css('transform','translate(0px,0px)');
        },
        outAn:function f() {
            $('.pencil1').css('transform','translate(0px,-100px)');
            $('.pencil2').css('transform','translate(0px,100px)');
            $('.pencil3').css('transform','translate(0px,100px)');
        }
    },
    {
        inAn:function () {
            $('.CCC .box-wrap .box1').css('transform','rotate(0deg)');
            $('.CCC .box-wrap .box2').css('transform','rotate(0deg)');

        },
        outAn:function f() {
            $('.CCC .box-wrap .box1').css('transform','rotate(45deg)');
            $('.CCC .box-wrap .box2').css('transform','rotate(-45deg)');
        }
    },
    {
        inAn:function () {
            $('.DDD header').css({transform:'translateX(0px)',
                opacity:1   });
            $('.DDD .text').css({transform:'translateX(0px)',
                opacity:1   });
            $('.DDD .text_bu').css({transform:'translateY(0px)',
                opacity:1   });

        },
        outAn:function f() {
            $('.DDD header').css({transform:'translateX(-200px)',
                opacity:0   });
            $('.DDD .text').css({transform:'translateX(200px)',
                opacity:0   });
            $('.DDD .text_bu').css({transform:'translateY(600px)',
                opacity:0   });
        }
    },
]

$(function () {


    for(var i=0;i<entryAnime.length;i++){
        entryAnime[i]["outAn"]();
    }

  // entryAnime[4].outAn();
  //   setInterval(function () {
  //       entryAnime[4].inAn();
  //   },2000)
})