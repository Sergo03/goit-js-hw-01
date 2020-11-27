const credits = 23500;
const pricePerDroid = 3000;
let quantityDroid = prompt('Сколько дроидов вы хотите купить?');



if (quantityDroid === null) {
    console.log('Отменено пользователем!');
} else {
    quantityDroid = Number(quantityDroid);
const totalPrice = quantityDroid * pricePerDroid;

if (totalPrice > credits) { 
    console.log('Недостаточно средств на счету!');
} else{
 const balance = credits - totalPrice;  

    console.log(`Вы купили ${quantityDroid} дроидов, на счету осталось ${balance} кредитов.`);
    }
}

