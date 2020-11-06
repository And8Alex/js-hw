'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {

	// контроль на корректность введенных данных
	if (isNaN(percent)) {
		return `Параметр "Процентная ставка" содержит некорректное значение: ${percent}`
	} else if (isNaN(contribution)) {
		return `Параметр "Первоначальный взнос" содержит некорректное значение: ${contribution}`
	} else if (isNaN(amount)) {
		return `Параметр "Общая стоимость" содержит некорректное значение: ${amount}`
	}

    // 1/12 процентной ставки
    let percentRate = percent / (100 * 12);
    //количество месяцев
    let period = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth()); 
    // ежемесячный платеж
    let currentPay = (amount - contribution) * (percentRate + percentRate / ((Math.pow((1 + percentRate), period)) - 1)); 

    let totalAmount = (currentPay * period).toFixed(2);

    console.log(totalAmount);
    return Number(totalAmount); 
}


function getGreeting(name) {
  return `Привет, мир! Меня зовут ${name || 'Аноним'}.`;
  // return `Привет, мир! Меня зовут ${(name === undefined || name === null || name === '') ? 'Аноним' : name}.`;
}


