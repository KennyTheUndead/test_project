'use scrict';

let  money = prompt("Ваш бюджет за месяц", ""),
time = prompt("Введите дату в формате YYYY-MM-DD", "0000-00-00");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false,
};

let expenseItem1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    expenseItem2 = prompt("Введите обязательную статью расходов в этом месяце", '');

    appData.expenses[expenseItem1] = prompt("Во сколько обойдется?", "");
    appData.expenses[expenseItem2] = prompt("Во сколько обойдется?", "");

alert ( appData.budget /30 );



