/* JS Snippet to trigger class change on page scroll */
 
(function (element, $) {
    'use strict';
    var target = $(element),
        className = "scrolly",
        scroll,
        mobileBreakpoint = 992;
      
    if($(window).scrollTop() > 0) {
        target.addClass(className);
    }
      
    $(window).scroll(function(){
           
         scroll = $(window).scrollTop();
         scroll=1; //GAMBIARRA PRA MANTER A SOMBRA DO HEADER SEMPRE ATIVA
    if(scroll > 0 ) {
        target.addClass(className);
    } else {
        target.removeClass(className);
    }
});
}('body',jQuery));