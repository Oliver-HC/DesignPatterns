from FlyNoWay import *
from Quack import *

from Duck import *

class ModelDuck(Duck):
    def __init__(self):
        super(ModelDuck, self).__init__()
        self.flyBehavior = FlyNoWay()
        self.quackBehavior = Quack()

    def display(self):
        print "I'm ModelDuck"