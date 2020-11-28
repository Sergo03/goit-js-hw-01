let cost;
let country = prompt('Укажите страну доставки.');
let normalizedInput = country.toUpperCase();

switch (normalizedInput) {
    case 'КИТАЙ':
        cost = 100;
        console.log(`Доставка в ${normalizedInput} будет стоить ${cost} кредитов`);
        break;
    
    case 'ЧИЛИ':
        cost = 250;
        console.log(`Доставка в ${normalizedInput} будет стоить ${cost} кредитов`);
        break;

    case 'АВСТРАЛИЯ':
        cost = 170;
        console.log(`Доставка в ${normalizedInput} будет стоить ${cost} кредитов`);
        break;
    
    case 'ИНДИЯ':
        cost = 80;
        console.log(`Доставка в ${normalizedInput} будет стоить ${cost} кредитов`);
        break;
    
    case 'ЯМАЙКА':
        cost = 120;
        console.log(`Доставка в ${normalizedInput} будет стоить ${cost} кредитов`);
        break;
    
    default:
        alert('В вашей стране доставка не доступна');
}

// console.log(`Доставка в ${normalizedInput} будет стоить ${cost} кредитов`);
