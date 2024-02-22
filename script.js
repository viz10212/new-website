(function(){
"use strict"
var sidemenu = document.querySelectorAll('ul li ul');
var menulinks = document.querySelectorAll('.menulink');

function hidesubmenu(){
    for (var i = 0; i < sidemenu.length; i++){
        sidemenu[i].className = 'hide-menu';
    }
}
hidesubmenu()

for(let i = 0 ; i < menulinks.length; i++){
    menulinks[i].addEventListener('click', function(event){
        event.preventDefault();
        const thismenu = this.parentNode.querySelector('ul')

        if(thismenu.classList.contains('hide-menu')){
            hidesubmenu()
            thismenu.className = 'show-menu';
        }
        else{
            thismenu.className = 'hide-menu';
        }
    })
}

})()