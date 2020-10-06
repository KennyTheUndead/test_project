"use strict";

let start = document.getElementById('start'), 

budgetValue =  document.getElementsByClassName('budget-value')[0],
dayBudget =  document.getElementsByClassName('daybudget-value')[0],
levelValue =  document.getElementsByClassName('level-value')[0],
expenses =  document.getElementsByClassName('expenses-value')[0],
optionalExpenses =  document.getElementsByClassName('optionalexpenses-value')[0],
income =  document.getElementsByClassName('income-value')[0],
monthSavings =  document.getElementsByClassName('monthsavings-value')[0],
yearSavings =  document.getElementsByClassName('yearsavings-value')[0],

expensesItem = document.getElementsByClassName('expenses-item'),
expensesBtn = document.getElementsByTagName('button')[0],
optionalExpensesBtn = document.getElementsByTagName('button')[1],
countBtn = document.getElementsByTagName('button')[2],
optionalExpensesItem = document.querySelectorAll(' .optionalexpenses-item'),
addIncome = document.querySelector(' .choose-income'),
checksavings = document.querySelector(' #savings'),
sumValue = document.querySelector(' .choose-sum'),
percentValue = document.querySelector(' .choose-percent'),

year = document.querySelector(' .year-value'),
month = document.querySelector(' .month-value'),
day = document.querySelector(' .day-value');

let  money, time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

start.addEventListener('click', function() {

    while (money == undefined || money == null || money == "" || isNaN(parseInt(money))) {

    money = prompt("Ваш бюджет за месяц", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "0000-00-00");
} 
appData.budget = (+money);
budgetValue.textContent = (+money).toFixed();
appData.timeData = time;
year.value = new Date(Date.parse(time)).getFullYear();
month.value = new Date(Date.parse(time)).getMonth() + 1;
day.value = new Date(Date.parse(time)).getUTCDate();
expensesBtn.disabled = false;
optionalExpensesBtn.disabled = false;
countBtn.disabled = false;
});


expensesBtn.addEventListener('click', function() {
    let i = 0,
        sum = 0;

        while ( i < expensesItem.length ) {
            let a = expensesItem[i].value,
                b = +expensesItem[++i].value;

                if (b == null || b == "" || isNaN(parseInt(b)) || !(a!= null && a!="" && a.length < 50)) {
                    i--;

                } else  {
                    appData.expenses[a] = b;
                    sum += +b;
                } i++;
            } expenses.textContent = sum;


});

optionalExpensesBtn.addEventListener('click', function() {
    
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;

            if (!(opt!= null && opt!="" && opt.length < 50)) {
                i--;

            } else  {
                appData.optionalExpenses[i] = opt;
                optionalExpenses.textContent += appData.optionalExpenses[i] + ' ';
            }
        } 
});

countBtn.addEventListener('click', function() {

    if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - +expenses.textContent) / 30).toFixed();
    dayBudget.textContent = appData.moneyPerDay;

       if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Низкий уровень достатка";

        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";

        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";

        } else evelValue.textContent = "ошибка ввода"; 
    } else {
        dayBudget.textContent = "Произошла ошибка";
    }
});

addIncome.addEventListener('input', function() {
    let inc = addIncome.value;
    appData.income = inc.split(', ');
    income.textContent = appData.income;
});

checksavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function(){
    if (appData.savings == true) {
       let sum = +sumValue.value,
       percent = +percentValue.value;
       appData.monthIncome = sum/100/12*percent;
       appData.yearIncome = sum/100*percent;
       monthSavings.textContent = appData.monthIncome.toFixed(1);
       yearSavings.textContent = appData.yearIncome.toFixed(1);
       console.log(percent);
    }
});

percentValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value,
        percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false,
};
// for (let items in appData) {
//     console.log("Наша программа включает в себя данные: " +items + " - " + appData[items]) ;
// };



