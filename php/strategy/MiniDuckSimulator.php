<?
namespace strategy;

use strategy;

include 'FlyBehavior.php';
include 'QuackBehavior.php';

include 'Duck.php';

MiniDuckSimulator::run();

class MiniDuckSimulator {
    public static function run() {
        $mallard = new MallardDuck();
        $mallard->performQuack();
        $mallard->performFly();

        $model = new ModelDuck();
        $model->performFly();
        $model->setFlyBehavior(new FlyRocketPowered());
        $model->performFly();
    }
}
?>