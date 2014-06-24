<?
include_once("./pizzaStore/PizzaStore.php");

include_once("./pizzaIngredientFactory/ChicagoPizzaIngredientFactory.php");

include_once("./pizza/CheesePizza.php");
include_once("./pizza/VeggiePizza.php");
include_once("./pizza/ClamPizza.php");
include_once("./pizza/PepperoniPizza.php");

class ChicagoPizzaStore extends PizzaStore {
    public function createPizza($item) {
        $pizza = null;
        $ingredientFactory = new ChicagoPizzaIngredientFactory();

        if($item === "cheese") {
            $pizza = new CheesePizza($ingredientFactory);
            $pizza->setName("Chicago Style Cheese Pizza");
        } elseif($item === "veggie") {
            $pizza = new VeggiePizza($ingredientFactory);
            $pizza->setName("Chicago Style Veggie Pizza");
        } elseif($item === "clam") {
            $pizza = new ClamPizza($ingredientFactory);
            $pizza->setName("Chicago Style Clam Pizza");
        } elseif($item === "pepperoni") {
            $pizza = new PepperoniPizza($ingredientFactory);
            $pizza->setName("Chicago Style Clam Pizza");
        }
        return $pizza;
    }
}
?>