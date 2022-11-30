'use strict';

const container = document.querySelector('.container');

window.addEventListener('click', function(event) {

    if (event.target.hasAttribute('data-cart')) {

        const card = event.target.closest('#category-1');

        console.log('Card 1');

        const productInfo = {
            id: category1.dataset.id,
        };

        console.log(productInfo);

        const cartItemHTML = `<div class="box">
        <title class="title">Корзина</title>
        <div class="image-container" class="card" id="${productInfo.id}">
            <img class="image" src="image1.jpg" alt="Форма mizuno">
            <button data-cart class="button">Удалить из корзины</button>
            <a href="index2.html" class="link">Форма волейбольная Mizuno</a>
            <div class="title">Комплект волейбольной формы Mizuno, женская. Выполнен из легкого материала, который отлично впитывает влагу.</div>
        </div>
    </div>`;

    container.insertAdjacentHTML('beforeend', cartItemHTML);
        
    }

    if (event.target.hasAttribute('data-cart2')) {

        const card = event.target.closest('#category2');

        console.log('Card 2');

        const productInfo = {
            id: category1.dataset.id,
        };

        console.log(productInfo);

        const cartItemHTML = `<div class="box">
        <title class="title">Корзина</title>
        <div class="image-container" class="card" id="${productInfo.id}">
            <img class="image" src="image1.jpg" alt="Форма mizuno">
            <button data-cart class="button">Удалить из корзины</button>
            <a href="index2.html" class="link">Форма волейбольная Mizuno</a>
            <div class="title">Комплект волейбольной формы Mizuno, женская. Выполнен из легкого материала, который отлично впитывает влагу.</div>
        </div>
    </div>`;

    container.insertAdjacentHTML('beforeend', cartItemHTML);
        
    }

    if (event.target.hasAttribute('data-cart3')) {

        const card = event.target.closest('#category3');

        console.log('Card 3');

        const productInfo = {
            id: category1.dataset.id,
        };

        console.log(productInfo);

        const cartItemHTML = `<div class="box">
        <title class="title">Корзина</title>
        <div class="image-container" class="card" id="${productInfo.id}">
            <img class="image" src="image1.jpg" alt="Форма mizuno">
            <button data-cart class="button">Удалить из корзины</button>
            <a href="index2.html" class="link">Форма волейбольная Mizuno</a>
            <div class="title">Комплект волейбольной формы Mizuno, женская. Выполнен из легкого материала, который отлично впитывает влагу.</div>
        </div>
    </div>`;

    container.insertAdjacentHTML('beforeend', cartItemHTML);
        
    }

    if (event.target.hasAttribute('data-cart4')) {

        const card = event.target.closest('#category4');

        console.log('Card 4');

        const productInfo = {
            id: category1.dataset.id,
        };

        console.log(productInfo);

        const cartItemHTML = `<div class="box">
        <title class="title">Корзина</title>
        <div class="image-container" class="card" id="${productInfo.id}">
            <img class="image" src="image1.jpg" alt="Форма mizuno">
            <button data-cart class="button">Удалить из корзины</button>
            <a href="index2.html" class="link">Форма волейбольная Mizuno</a>
            <div class="title">Комплект волейбольной формы Mizuno, женская. Выполнен из легкого материала, который отлично впитывает влагу.</div>
        </div>
    </div>`;

    container.insertAdjacentHTML('beforeend', cartItemHTML);
        
    }

    if (event.target.hasAttribute('data-cart5')) {

        const card = event.target.closest('#category5');

        console.log('Card 5');

        const productInfo = {
            id: category1.dataset.id,
        };

        console.log(productInfo);

        const cartItemHTML = `<div class="box">
        <title class="title">Корзина</title>
        <div class="image-container" class="card" id="${productInfo.id}">
            <img class="image" src="image1.jpg" alt="Форма mizuno">
            <button data-cart class="button">Удалить из корзины</button>
            <a href="index2.html" class="link">Форма волейбольная Mizuno</a>
            <div class="title">Комплект волейбольной формы Mizuno, женская. Выполнен из легкого материала, который отлично впитывает влагу.</div>
        </div>
    </div>`;

    container.insertAdjacentHTML('beforeend', cartItemHTML);
        
    }

    if (event.target.hasAttribute('data-cart6')) {

        const card = event.target.closest('#category6');

        console.log('Card 6');

        const productInfo = {
            id: category1.dataset.id,
        };

        console.log(productInfo);

        const cartItemHTML = `<div class="box">
        <title class="title">Корзина</title>
        <div class="image-container" class="card" id="${productInfo.id}">
            <img class="image" src="image1.jpg" alt="Форма mizuno">
            <button data-cart class="button">Удалить из корзины</button>
            <a href="index2.html" class="link">Форма волейбольная Mizuno</a>
            <div class="title">Комплект волейбольной формы Mizuno, женская. Выполнен из легкого материала, который отлично впитывает влагу.</div>
        </div>
    </div>`;

    container.insertAdjacentHTML('beforeend', cartItemHTML);
        
    }


});