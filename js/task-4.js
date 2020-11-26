const credits = 23500;
const pricePerDroid = 3000;
const quantityDroid = prompt('Сколько дроидов вы хотите купить?');


if (quantityDroid === null) {
    console.log('Отменено пользователем!');
} else {
const totalPrice = quantityDroid * pricePerDroid;

if (totalPrice > credits) { 
    console.log('Недостаточно средств на счету!');
} else{
 const balance = credits - totalPrice;  

    console.log(`Вы купили ${quantityDroid} дроидов, на счету осталось ${balance} кредитов.`);
    }
}

