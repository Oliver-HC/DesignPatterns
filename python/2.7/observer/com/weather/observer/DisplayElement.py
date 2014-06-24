from abc import ABCMeta, abstractmethod

class DisplayElement:
    __metaclass__ = ABCMeta

    @abstractmethod
    def display(self):
        pass