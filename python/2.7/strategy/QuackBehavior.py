#import ABCMeta to use Abstract Class
from abc import ABCMeta, abstractmethod

class QuackBehavior:
	__metaclass__ = ABCMeta

	@abstractmethod
	def quack(self):
		pass

class Quack(QuackBehavior):
    def quack(self):
        print "Quack! Quack!"

class MuteQuack(QuackBehavior):
    def quack(self):
        print "... ..."

class Squeak(QuackBehavior):
    def quack(self):
        print "Squack! Squack!"