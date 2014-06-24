<?
include_once("./beverage/Beverage.php");

include_once("./beverage/Espresso.php");
include_once("./beverage/HouseBlend.php");
include_once("./beverage/DarkRoast.php");

include_once("./condimentDecorator/Mocha.php");
include_once("./condimentDecorator/Soy.php");
include_once("./condimentDecorator/Whip.php");

class Decorator {
    public static function main(){
        $beverage = new Espresso();
        echo($beverage->getDescription() . " $" . $beverage->cost() . "\n");

        $beverage2 = new DarkRoast();
        $beverage2 = new Mocha($beverage2);
        $beverage2 = new Mocha($beverage2);
        $beverage2 = new Whip($beverage2);
        echo($beverage2->getDescription() . " $" . $beverage2->cost() . "\n");

        $beverage3 = new HouseBlend();
        $beverage3 = new Soy($beverage3);
        $beverage3 = new Mocha($beverage3);
        $beverage3 = new Whip($beverage3);
        echo($beverage3->getDescription() . " $" . $beverage3->cost() . "\n");
    }
}

Decorator::main();
?>