import { Component, OnInit, Input } from "angular2/core";
import {WeatherItemComponent} from "./weather-item.component";
import { WeatherItem } from "./weather-Item";
import { WeatherService } from "./weather.service";

@Component({
    selector: 'weather-list',
    template: `
        <section class="weather-list">
            <button class="delete" (click)="clearWeatherItems()">Clear cities</button>
            <weather-item *ngFor="#weatherItem of weatherItems" 
            [item]="weatherItem"></weather-item>
  
        </section>
    `,
    directives: [WeatherItemComponent],
    providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {
    weatherItems: WeatherItem[];

       
   clearWeatherItems() {
       
        this.weatherItems[1].clearWeatherItems();

        
   }

    constructor(private _weatherService: WeatherService) {}

    ngOnInit():any {
        this.weatherItems = this._weatherService.getWeatherItems();
    }
}