<?
namespace strategy;

use strategy;

include 'FlyBehavior.php';
include 'QuackBehavior.php';

include 'FlyWithWings.php';
include 'FlyNoWay.php';
include 'FlyRocketPowered.php';
include 'Quack.php';
include 'MuteQuack.php';
include 'Squeak.php';

include 'Duck.php';
include 'MallardDuck.php';
include 'ModelDuck.php';

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