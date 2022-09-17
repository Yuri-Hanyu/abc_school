'use strict';
{
    const appeal_btn = document.getElementById('appeal');
    window.addEventListener("scroll", () => {
    const currentY = window.pageYOffset;
    if ( currentY < 3450){
        setTimeout(function(){
        appeal_btn.style.opacity = 1;
        }, 1);
    } else {
        setTimeout(function(){
        appeal_btn.style.opacity = 0;
        }, 1);
    }
    });
}