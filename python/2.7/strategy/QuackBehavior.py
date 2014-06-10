#import ABCMeta to use Abstract Class
from abc import ABCMeta, abstractmethod

class QuackBehavior:
	__metaclass__ = ABCMeta

	@abstractmethod
	def quack(self):
		pass