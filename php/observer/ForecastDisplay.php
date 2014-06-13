<?
include_once("WeatherData.php");
include_once("Observer.php");
include_once("DisplayElement.php");

class ForecastDisplay implements Observer, DisplayElement {
    private $currentPressure;
    private $lastPressure;
    private $weatherData;

    public function __construct(WeatherData $weatherData) {
        $this->weatherData = $weatherData;
        $this->weatherData->registerObserver($this);
    }

    public function update ($temp, $humidity, $pressure) {
        $this->lastPressure = $this->currentPressure;
        $this->currentPressure = $pressure;
        $this->display();
    }

    public function display() {
        echo "Forecast: ";
        if($this->currentPressure > $this->lastPressure) {
            echo "Improving weather on the way!\n";
        } elseif ($this->currentPressure == $this->lastPressure) {
            echo "More of the same\n";
        } elseif ($this->currentPressure < $this->lastPressure) {
            echo "Watch out for cooler, rainy weather\n";
        }
    }
}
?>