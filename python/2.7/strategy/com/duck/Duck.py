from FlyBehavior import *
from QuackBehavior import *

class Duck(object):
	def __init__(self):
		self.flyBehavior = FlyBehavior
		self.quackBehavior = QuackBehavior

	def display(self):
		pass

	def performFly(self):
		self.flyBehavior.fly()

	def performQuack(self):
		self.quackBehavior.quack()

	def prformBehavior(self):
		self.quackBehavior.quack();

	def setFlyBehavior(self, fb):
		self.flyBehavior = fb

	def setQuackBehavior(self, qb):
		self.QuackBehavior = qb

	def swim(self):
		print "All ducks float, even decoys!"

class MallardDuck(Duck):
	def __init__(self):
		super(MallardDuck, self).__init__()
		self.flyBehavior = FlyWithWings()
		self.quackBehavior = Quack()

	def display(self):
		print "I'm a real Mallard duck"

class ModelDuck(Duck):
    def __init__(self):
        super(ModelDuck, self).__init__()
        self.flyBehavior = FlyNoWay()
        self.quackBehavior = Quack()

    def display(self):
        print "I'm ModelDuck"