'use scrict';

let  money = +prompt("Ваш бюджет за месяц", ""),
     time = prompt("Введите дату в формате YYYY-MM-DD", "0000-00-00");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false,
};

/* for (i= 0; i < 2; i++) { 

    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", ""); 

    if (typeof(a) === "string" && a != null && a!='' && a.length < 50 && typeof(b) === "number" && b != null && b !='') {
        
        appData.expenses[a] = b;
        console.log("done");
   }
    else  {

        alert ("Значения введены неверно, повторите ввод");
        i--;
    }
}; */

/* let i = 0;

while ( i < 2 ) {

    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = +prompt("Во сколько обойдется?", ""); 
    
    if (typeof(a) === "string" && a != null && a!='' && a.length < 50 && typeof(b) === "number" && b != null && b !='') {
    
    appData.expenses[a] = b;
    console.log("done");
    }
    else  {

    alert ("Значения введены неверно, повторите ввод");
    i--;
    }
    i++; 
}  */

let i = 0;

do {

    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", ""); 

    if (typeof(a) === "string" && a != null && a!='' && a.length < 50 && typeof(b) === "number" && b != null && b !='') {

    appData.expenses[a] = b;
    console.log("done");
    } else  { 

    alert ("Значения введены неверно, повторите ввод");
    i--;
    } 

    i++; 
}    while (i < 2);

appData.moneyPerDay = appData.budget / 30; 
alert ("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {

    console.log("Низкий уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {

    console.log("Низкий уровень достатка")
} else if (appData.moneyPerDay > 2000) {

    console.log("Высокий уровень достатка")
} else console.log("Ошибка ввода"); 

