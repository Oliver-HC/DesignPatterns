<?
namespace strategy;

interface QuackBehavior {
    public function quack();
}

class Quack implements QuackBehavior {
    public function quack() {
        echo "Quack!! Quack!!\n";
    }
}

class MuteQuack implements QuackBehavior {
    public function quack() {
        echo "... ....\n";
    }
}

class Squeak implements QuackBehavior {
    public function quack() {
        echo "Squeak!! Squeak!!\n";
    }
}
?>
