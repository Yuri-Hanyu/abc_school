'use strict';

{
    const dts = document.querySelectorAll('.accordion dt');

    dts.forEach(dt => {
        dt.addEventListener('click', ()=> {
            dt.parentNode.classList.toggle('appear');
        });
    });
}
