from FlyWithWings import *
from Quack import *

from Duck import *

class MallardDuck(Duck):
	def __init__(self):
		super(MallardDuck, self).__init__()
		self.flyBehavior = FlyWithWings()
		self.quackBehavior = Quack()

	def display(self):
		print "I'm a real Mallard duck"
