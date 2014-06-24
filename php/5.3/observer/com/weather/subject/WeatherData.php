<?
include_once("./subject/Subject.php");

class WeatherData implements Subject {
    protected $observers;
    protected $temperature;
    protected $humidity;
    protected $pressure;

    public function __construct() {
        $this->observers = array();
    }

    public function registerObserver(Observer $o) {
        array_push($this->observers, $o);
    }

    public function removeObserver(Observer $o) {
        $i = array_search($o, $this->observers);
        if($i >= 0) {
            unset($this->observers[$i]);
        }
    }

    public function notifyObservers() {
        foreach ($this->observers as $observer)
            $observer->update($this->temperature, $this->humidity, $this->pressure);
    }

    public function measurementsChanged() {
        $this->notifyObservers();
    }

    public function setMeasurements($temperature, $humidity, $pressure) {
        $this->temperature = $temperature;
        $this->humidity = $humidity;
        $this->pressure = $pressure;
        $this->measurementsChanged();
    }

    public function getTemperature() {
        return $this->temperature;
    }

    public function getHumidity() {
        return $this->humidity;
    }

    public function getPressure() {
        return $this->pressure;
    }
}
?>