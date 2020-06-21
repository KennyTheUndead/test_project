"use strict";

let start = document.getElementById('start'), 

budget =  document.getElementsByClassName('budget-value'),
daybudget =  document.getElementsByClassName('daybudget-value'),
level =  document.getElementsByClassName('level-value'),
expenses =  document.getElementsByClassName('expenses-value'),
optionalexpenses =  document.getElementsByClassName('optionalexpenses-value'),
income =  document.getElementsByClassName('income-value'),
monthsavings =  document.getElementsByClassName('monthsavings-value'),
yearsavings =  document.getElementsByClassName('yearsavings-value'),

expensesItem = document.getElementsByClassName('expenses-item'),
expensesBtn = document.getElementsByTagName('button')[0],
optionalexpensesBtn = document.getElementsByTagName('button')[1],
countBtn = document.getElementsByTagName('button')[2],
optionalexpensesItem = document.querySelectorAll(' .optionalexpenses-item'),
addIncome = document.querySelector(' .choose-income'),
savings = document.querySelector(' #savings'),
sumItem = document.querySelector(' .choose-sum'),
percent = document.querySelector(' .choose-percent'),

year = document.querySelector(' .year-value'),
month = document.querySelector(' .month-value'),
day = document.querySelector(' .day-value');


