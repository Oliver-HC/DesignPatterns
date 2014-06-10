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
