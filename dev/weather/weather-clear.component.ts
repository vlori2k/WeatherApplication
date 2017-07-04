import { WeatherItem } from "./weather-Item";
import { Component } from 'angular2/core';

@Component ({

    selector: 'weather-clear',
    template: `
    
        <div id="clear">
        <button (click)="clearWeatherItems()">Clear cities</button>
        </div>

    `,
    styleUrls: ['src/css/clear.css'],
})

export class WeatherClearComponent {
   weatherItem: WeatherItem; 
   
  
}

