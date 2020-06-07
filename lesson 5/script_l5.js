'use strict';


let  money = "",
     time;



function start () {
    while (money == null || money == "" || isNaN(parseInt(money))) {
        money = prompt("Ваш бюджет за месяц", ""),
        time = prompt("Введите дату в формате YYYY-MM-DD", "0000-00-00");
    } money = (+money);
};

start ();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: true,
    chooseExpenses: function () {
        let i = 0;

        while ( i < 2 ) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", ""); 
    
                if (b == null || b == "" || isNaN(parseInt(b)) || !(typeof(a) === "string" && a!= null && a!="" && a.length < 50)) {
                    i--;
                } else  {
                    appData.expenses[a] = b;
                } i++; 
            }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(); 
        alert("Бюджет на день " +appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Низкий уровень достатка")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        
            console.log("Низкий уровень достатка")
        } else if (appData.moneyPerDay > 2000) {
        
            console.log("Высокий уровень достатка")
        } else console.log("Ошибка ввода"); 
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let a = prompt("Введите cтатью необязательных расходов в этом месяце", '');
    
                if (!(typeof(a) === "string" && a!= null && a!="" && a.length < 50)) {
                    i--;
                } else  {
                    appData.optionalExpenses[(i)] = a;
                }
            }
    },
    checkSaving: function () {
        if (appData.savings == true) {
            let save = "", percent ="";
    
            while (save == null || save == "" || isNaN(parseInt(save)) || percent == null || percent == "" || isNaN(parseInt(percent)) || (+percent >= 100)) {
                save = prompt("Какова сумма накоплений?");
                percent = prompt("Под какой процент?");
            }
                appData.monthIncome =((+save)/100/12*(+percent)).toFixed();
                alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseIncome: function () {
        let a1 = 0,
            a2 = 0;
        
        while (a1 == null || !isNaN(parseInt(a1)) || a1 < "Z" || !isNaN(parseInt(a2)) || a2 < "Z") {
            a1 = prompt("Что принесет дополнительный доход? (Перечислите через запятую и пробел)", "");
            a2 = prompt("Может что-то еще?", "");
        }
        appData.income = a1.split(', ');
        appData.income.sort();

        if (a2 !=  null) {
            appData.income.push(a2);
        }
        appData.income.sort();
        appData.income.forEach(function (value, index) {
            alert (`Способы доп. заработка: ${(index + 1)} - ${value}`);
        });
    },

};

for (let items in appData) {
    console.log("Наша программа включает в себя данные: " +items + " - " + appData[items]) ;
};

