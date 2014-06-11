var FlyRocketPowered = require('./FlyBehavior').FlyRocketPowered;

var MallardDuck = require('./Duck').MallardDuck;
var ModelDuck = require('./Duck').ModelDuck;

var mallard = new MallardDuck();
mallard.performFly();
mallard.performQuack();

var modelDuck = new ModelDuck();
modelDuck.performFly();
modelDuck.setFlyBehaivor(new FlyRocketPowered());
modelDuck.performFly();