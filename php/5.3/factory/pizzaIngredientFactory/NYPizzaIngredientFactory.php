<?
include_once("./pizzaIngredientFactory/PizzaIngredientFactory.php");

include_once("./dough/ThinCrustDough.php");
include_once("./sauce/MarinaraSauce.php");
include_once("./cheese/ReggianoCheese.php");
include_once("./veggies/Garlic.php");
include_once("./veggies/Onion.php");
include_once("./veggies/Mushroom.php");
include_once("./veggies/RedPepper.php");
include_once("./pepperoni/SlicedPepperoni.php");
include_once("./clams/FreshClams.php");

class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    public function createDough() {
        return new ThinCrustDough();
    }

    public function createSauce() {
        return new MarinaraSauce();
    }

    public function createCheese() {
        return new ReggianoCheese();
    }

    public function createVeggies() {
        $this->veggies[] = new Garlic();
        $this->veggies[] = new Onion();
        $this->veggies[] = new Mushroom();
        $this->veggies[] = new RedPepper();
        return $this->veggies;
    }

    public function createPepperoni() {
        return new SlicedPepperoni();
    }

    public function createClam() {
        return new FreshClams();
    }
}
?>