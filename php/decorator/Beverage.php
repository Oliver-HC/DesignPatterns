<?
abstract class Beverage {
    protected $description;

    public function __construct() {
        $this->description = "Unknown Beverage";
    }

    public function getDescription() {
        return $this->description;
    }

    abstract public function cost();
}
?>