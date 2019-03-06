//导航条处js
///8 logo站外link
$(function () {

    $('#head .logo').click(function () {

        if(confirm('今 goto mihoyo official netsite ?')){
            window.location = "https://www.bh3.com/";
        };

    })
})