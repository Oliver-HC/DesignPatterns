#import ABCMeta to use Abstract Class
from abc import ABCMeta, abstractmethod

class FlyBehavior:
	__metaclass__ = ABCMeta

	@abstractmethod
	def fly(self):
		pass

class FlyWithWings(FlyBehavior):
    def fly(self):
        print "I believe I can fly"

class FlyNoWay(FlyBehavior):
    def fly(self):
        print "I can't fly"

class FlyRocketPowered(FlyBehavior):
    def fly(self):
        print "I'm flying with a rocket"