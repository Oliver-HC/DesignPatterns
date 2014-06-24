<?
include_once("./pizzaStore/NYPizzaStore.php");
include_once("./pizzaStore/ChicagoPizzaStore.php");

class Factory {
    public static function main() {
        $nyStore = new NYPizzaStore();
        $chicagoStore = new ChicagoPizzaStore();

        $pizza = $nyStore->orderPizza("cheese");
        echo ("Ethan ordered a " . $pizza . "\n");

        $pizza = $chicagoStore->orderPizza("cheese");
        echo ("Joel ordered a " . $pizza . "\n");

        $pizza = $nyStore->orderPizza("clam");
        echo ("Ethan ordered a " . $pizza . "\n");

        $pizza = $chicagoStore->orderPizza("clam");
        echo ("Joel ordered a " . $pizza . "\n");

        $pizza = $nyStore->orderPizza("pepperoni");
        echo ("Ethan ordered a " . $pizza . "\n");

        $pizza = $chicagoStore->orderPizza("pepperoni");
        echo ("Joel ordered a " . $pizza . "\n");

        $pizza = $nyStore->orderPizza("veggie");
        echo ("Ethan ordered a " . $pizza . "\n");

        $pizza = $chicagoStore->orderPizza("veggie");
        echo ("Joel ordered a " . $pizza . "\n");
    }
}

Factory::main();
?>