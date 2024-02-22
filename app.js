(function(){
    "use strict"
    $('ul li ul').hide();
    $('.menulink').on("click",function(){
        const thismenu = $(this).next('ul')
        $('ul li ul').not(thismenu).hide()
        thismenu.toggle()
    });
})();