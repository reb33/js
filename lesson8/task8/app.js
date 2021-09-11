'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});

let cartContent = document.querySelector('.cartContent')
let cartIcon = document.querySelector('.cartIconWrap');
document.querySelector('.cartIcon').addEventListener('click', e =>{
    cartContent.classList.toggle('hidden');
});

document.querySelectorAll('.featuredItem button')
    .forEach(el => el
        .addEventListener('click', e=> {
            let featuredData = document.querySelector('.featuredItem:hover .featuredData');
            addToCart(featuredData);
        })
    )

function addToCart(featuredData){
    let id=featuredData.querySelector('.featuredName').innerText;
    let cartRow = getCartRow(id);
    if (cartRow)
        editCartRow(cartRow);
    else{
        let price = featuredData.querySelector('.featuredPrice').innerText;
        addCartRow(id, price);
    }
    calculateTotal();
    cartIcon.querySelector('span').innerText = parseInt(cartIcon.querySelector('span').innerText)+1;
}

function getCartRow(id){
    return cartContent.querySelector(`.row#${id}`)
}

function editCartRow(cartRow){
    let divCount = cartRow.querySelector('div[name=count]');
    let newCount = parseInt(divCount.innerText)+1;
    let divSum = cartRow.querySelector('div[name=sum]');
    let newSum = (Number(divSum.innerText.slice(1)) * newCount).toFixed(2);
    divCount.innerText=newCount+ ' шт.';
    divSum.innerText='$ '+newSum;
}

function addCartRow(id, price){
    let rowSniped = getCartRowCode(id, price);
    cartContent.querySelector('.cartContentGrid').insertAdjacentHTML('beforeEnd', rowSniped)
}

function getCartRowCode(id, price){
    return `<div id="${id}" class="row">
        <div name="id" >${id}</div>
        <div name="count" >1 шт.</div>
        <div name="prise">${price}</div>
        <div name="sum">${price}</div>
        <div class="row-border"></div>
    </div>`
}

function calculateTotal(){
    let totalSum = 0;
    cartContent.querySelectorAll('.cartContentGrid div[name=sum]')
        .forEach(el=>{
            totalSum += Number(el.innerText.slice(1));
        });
    cartContent.querySelector('.total .sum').innerText = totalSum;
}

