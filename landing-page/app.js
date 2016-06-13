// Revealing Module Pattern
var landingPageModule = (function($, global){
    
    $body = $('body');
    $btn = $('.btn');

    function initToTop() {
        $top = $('.to-top');

        $top.hide();
        $top.on('click', function(){
        $("html, body").animate(
            { scrollTop: "0px" }
        )});

        $(document).scroll(function() {
            var y = $(this).scrollTop();
            if (y < 10) {
                $top.fadeOut()
            } else {
                $top.fadeIn();
            }
        });
    }


    
    function initButtonScroll() {

        $body.find('.btn').each(function(i, v){
            var $this = $(this),
                target = $this.attr('data-target');
            
            $this.on('click', function(){     
                $(document.body).animate({
                    'scrollTop':   $(target).offset().top
                }, 1000);
            });
        });
    }

    return {
        initButtonScroll: initButtonScroll,
        initToTop: initToTop
    }

})(jQuery, window);


$(document).ready(function(){

    landingPageModule.initToTop();
    landingPageModule.initButtonScroll();
   
    $('body').find('.btn').each(function(i, v){
        var $this = $(this),
            target = $this.attr('data-target');
        
        $this.on('click', function(){     
            $(document.body).animate({
                'scrollTop':   $(target).offset().top
            }, 1000);
        });
    });


});