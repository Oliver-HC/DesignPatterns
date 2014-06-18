from FlyBehavior import *
from QuackBehavior import *

from Duck import *

mallard = MallardDuck()
mallard.performFly()
mallard.performQuack()

model = ModelDuck()
model.performFly()
model.setFlyBehavior(FlyRocketPowered())
model.performFly()