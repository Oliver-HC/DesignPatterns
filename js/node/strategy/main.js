require('./FlyBehavior');
require('./QuackBehavior');

require('./Duck');

var mallard = new MallardDuck();
mallard.performFly();
mallard.performQuack();

var modelDuck = new ModelDuck();
modelDuck.performFly();
modelDuck.setFlyBehavior(new FlyRocketPowered());
modelDuck.performFly();