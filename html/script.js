let budget = prompt('Ваш бюджет?Ваш бюджет?');
let nameMarket = prompt('Название вашего магазина?');
let mainList = {
    budget : budget,
    nameMarket : nameMarket,
    shopGoods : [],
    employers : {},
    open : 1
}
mainList.shopGoods.push(prompt('Какой тип товаров будем продавать?'));
mainList.shopGoods.push(prompt('Какой тип товаров будем продавать?'));
mainList.shopGoods.push(prompt('Какой тип товаров будем продавать?'));
console.log(JSON.stringify(mainList));