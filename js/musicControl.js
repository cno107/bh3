//music

    //9 music control
    $(function () {
        var flag = true;
        $('#head .music').click(function () {
            var audio = $(this).find('audio')[0];

            if(audio.paused){
                audio.muted = false;
                audio.volume = 1 ;
                audio.play();
                if(flag){

                    audio.currentTime = 10;
                    flag = !flag;
                }
                $(this).css({background:"url('img2/musicon.gif') no-repeat",
                    backgroundSize:'cover'})
            }else{
                audio.muted = true;
                audio.pause();
                $(this).css({background:"url('img2/musicoff.gif') no-repeat",
                    backgroundSize:'cover'})
            }

        })
    })
