<?
abstract class Pizza {
    protected $name;

    protected $dough;
    protected $sauce;
    protected $veggies = array();
    protected $cheese;
    protected $pepperoni;
    protected $clam;

    abstract function prepare();

    function bake() {
        echo ("Bake for 25 minutes at 350\n");
    }

    function cut() {
        echo ("Cutting the pizza into diagonal slices\n");
    }

    function box() {
        echo ("Place pizza in official PizzaStore box\n");
    }

    function setName($name) {
        $this->name = $name;
    }

    function getName() {
        return $this->name;
    }

    public function __toString() {
        $result = array();
        $result[] = "---- " . $this->name . " ----\n";
        if($this->dough != null) {
            $result[] = $this->dough;
            $result[] = "\n";
        }
        if($this->sauce != null) {
            $result[] = $this->sauce;
            $result[] = "\n";
        }
        if($this->cheese != null) {
            $result[] = $this->cheese;
            $result[] = "\n";
        }
        if($this->veggies != null) {
            foreach($this->veggies as $veggie) {
                $result[] = $veggie;
                $result[] = ", ";
            }
            array_pop($result);
            $result[] = "\n";
        }
        if($this->clam != null) {
            $result[] = $this->clam;
            $result[] = "\n";
        }
        if($this->pepperoni != null) {
            $result[] = $this->pepperoni;
            $result[] = "\n";
        }
        return implode($result, "");
    }
}
?>
