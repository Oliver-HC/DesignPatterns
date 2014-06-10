#import ABCMeta to use Abstract Class
from abc import ABCMeta, abstractmethod

class FlyBehavior:
	__metaclass__ = ABCMeta

	@abstractmethod
	def fly(self):
		pass
