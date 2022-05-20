$(document).ready(function ()
 {
    //  this function is use of hamburger menu
     $("#menu").click(function(){
         $(this).toggleClass('fa-times');
         $('.navbar').toggleClass('nav-toggle');
     });

     $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() ){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');

        
        }
        $('section').each(function(){
             let top=$(window).scrollTop()
             let height = $(this).height();
             let offset = $(this).offset().top - 200;
             let id= $(this).attr('id');

             if(top >=offset && top < offset +height ){
                 $('.navbar ul li a' ).removeClass('active');
                 $('.navbar').find(`[href="#${id}"]`).addClass('active');

             }
        });
     });
    
})