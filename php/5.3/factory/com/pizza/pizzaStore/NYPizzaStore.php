<?
include_once("./pizzaStore/PizzaStore.php");

include_once("./pizzaIngredientFactory/NYPizzaIngredientFactory.php");

include_once("./pizza/CheesePizza.php");
include_once("./pizza/VeggiePizza.php");
include_once("./pizza/ClamPizza.php");
include_once("./pizza/PepperoniPizza.php");

class NYPizzaStore extends PizzaStore {
    public function createPizza($item) {
        $pizza = null;
        $ingredientFactory = new NYPizzaIngredientFactory();

        if($item === "cheese") {
            $pizza = new CheesePizza($ingredientFactory);
            $pizza->setName("New York Style Cheese Pizza");
        } elseif($item === "veggie") {
            $pizza = new VeggiePizza($ingredientFactory);
            $pizza->setName("New York Style Veggie Pizza");
        } elseif($item === "clam") {
            $pizza = new ClamPizza($ingredientFactory);
            $pizza->setName("New York Style Clam Pizza");
        } elseif($item === "pepperoni") {
            $pizza = new PepperoniPizza($ingredientFactory);
            $pizza->setName("New York Style Clam Pizza");
        }
        return $pizza;
    }
}
?>