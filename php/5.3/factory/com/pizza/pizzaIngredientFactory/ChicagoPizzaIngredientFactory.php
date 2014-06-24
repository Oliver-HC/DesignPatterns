<?
include_once("./pizzaIngredientFactory/PizzaIngredientFactory.php");

include_once("./dough/ThickCrustDough.php");
include_once("./sauce/PlumTomatoSauce.php");
include_once("./cheese/MozzarellaCheese.php");
include_once("./veggies/BlackOlives.php");
include_once("./veggies/Spinach.php");
include_once("./veggies/Eggplant.php");
include_once("./pepperoni/SlicedPepperoni.php");
include_once("./clams/FrozenClams.php");

class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    public function createDough() {
        return new ThickCrustDough();
    }

    public function createSauce() {
        return new PlumTomatoSauce();
    }

    public function createCheese() {
        return new MozzarellaCheese();
    }

    public function createVeggies() {
        $this->veggies[] = new BlackOlives();
        $this->veggies[] = new Spinach();
        $this->veggies[] = new Eggplant();
        return $this->veggies;
    }

    public function createPepperoni() {
        return new SlicedPepperoni();
    }

    public function createClam() {
        return new FrozenClams();
    }
}
?>