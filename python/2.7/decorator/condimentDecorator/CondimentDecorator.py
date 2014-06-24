from Beverage import *

from abc import ABCMeta, abstractmethod

class CondimentDecorator(Beverage):
    __metaclass__ = ABCMeta

    def __init__(self):
        super(CondimentDecorator, self).__init__()

    @abstractmethod
    def getDescription(self):
        pass