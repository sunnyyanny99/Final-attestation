'use strict';


window.addEventListener('click', function(event) {

    if (event.target.hasAttribute('data-cart')) {

        const form = event.target.closest('.button-authorization');
        
        let email = document.querySelector('#email');
        let name = document.querySelector('#name');
        let message = document.querySelector('#sms');
        console.log(email.value);
        console.log(name.value);
        console.log(message.value);

    };
});