<?
include_once("Pizza.php");

class PepperoniPizza extends Pizza {
    protected $ingredientFactory;

    public function __construct(PizzaIngredientFactory $ingredientFactory) {
        $this->ingredientFactory = $ingredientFactory;
    }

    function prepare() {
        echo ("Prepareing " . $this->name . "\n");
        $this->dough = $this->ingredientFactory->createDough();
        $this->sauce = $this->ingredientFactory->createSauce();
        $this->cheese = $this->ingredientFactory->createCheese();
        $this->veggies = $this->ingredientFactory->createVeggies();
        $this->pepperoni = $this->ingredientFactory->createPepperoni();
    }
}
?>