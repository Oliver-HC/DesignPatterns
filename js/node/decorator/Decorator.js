require('./beverage/Espresso');
require('./beverage/HouseBlend');
require('./beverage/DarkRoast');

require('./condimentDecorator/Mocha');
require('./condimentDecorator/Soy');
require('./condimentDecorator/Whip');

var beverage = new Espresso();
console.log(beverage.getDescription() + " $" + beverage.cost());

var beverage2 = new DarkRoast();
var beverage2 = new Mocha(beverage2);
var beverage2 = new Mocha(beverage2);
var beverage2 = new Whip(beverage2);
console.log(beverage2.getDescription() + " $" + beverage2.cost());

var beverage3 = new HouseBlend();
var beverage3 = new Soy(beverage3);
var beverage3 = new Mocha(beverage3);
var beverage3 = new Whip(beverage3);
console.log(beverage3.getDescription() + " $" + beverage3.cost());