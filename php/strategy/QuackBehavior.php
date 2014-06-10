<?
namespace strategy;

interface QuackBehavior {
    public function quack();
}

class Quack implements QuackBehavior {
    public function quack() {
        echo "Quack!! Quack!!";
    }
}

class MuteQuack implements QuackBehavior {
    public function quack() {
        echo "... ....";
    }
}

class Squeak implements QuackBehavior {
    public function quack() {
        echo "Squeak!! Squeak!!";
    }
}
?>