from FlyRocketPowered import *

from MallardDuck import *
from ModelDuck import *

mallard = MallardDuck()
mallard.performFly()
mallard.performQuack()

model = ModelDuck()
model.performFly()
model.setFlyBehavior(FlyRocketPowered())
model.performFly()
