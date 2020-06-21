"use strict";

let menu = document.querySelectorAll('.menu')[0],

menuItem = document.querySelectorAll('.menu .menu-item'),

menuItemLi = document.createElement('li'),

text =  document.getElementById('title'),

adv = document.querySelectorAll('.adv')[0],

question = document.getElementById('prompt');

console.log(adv);

menuItemLi.classList.add("menu-item");

menuItemLi.textContent = ("Пятый элемент");

menu.insertBefore(menuItem[2], menuItem[1]);  

menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url(img/apple_true.jpg)";

text.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

question.textContent =  prompt("Ваше отношение к технике Apple", "");
