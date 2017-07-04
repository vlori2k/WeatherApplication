import { WEATHER_ITEMS } from "./weather.data";


export class WeatherItem {


    constructor(public cityName, public description: string, public temprature: number) {
 
    }
    clearWeatherItems() {

        WEATHER_ITEMS.splice(0);
    }
}