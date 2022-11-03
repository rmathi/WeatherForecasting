import {Component, Input, OnInit} from '@angular/core';
import {customeList, weatherDetails, WeatherForecastModel} from "../../shared/weatherForecast.model";

@Component({
  selector: 'app-weather-prediction',
  templateUrl: './weather-prediction.component.html',
  styleUrls: ['./weather-prediction.component.scss']
})
export class WeatherPredictionComponent implements OnInit {
  @Input() weatherLists: any;
  public weatherForecastData: any;
  public customWeatherList = [{
    date: '',
    list: [] as unknown as WeatherForecastModel
  }]

  constructor() { }

  ngOnInit(): void {
    if (this.weatherLists) {
      this.createCustomWeatherData();
    }
  }


  private createCustomWeatherData() {
    for (let i = 0; i < this.weatherLists?.length; i++) {
      const x: { date?: string, list: [] } = {
        list: []
      }
      const d = this.weatherLists[i].dt_txt.split(' ');
      if (this.weatherLists[i].dt_txt.includes(d[0])) {
        x.date = d[0];
        // @ts-ignore
        x.list.push(this.weatherLists[i])
        // @ts-ignore
        this.customWeatherList.push(x);
      }
    }

    this.weatherForecastData = Array.from(this.groupBy(this.customWeatherList, (item: { date: any; }) => item.date))
      .map(([date, items]) => ({ list: items.map((item: { list: any; }) => item.list), date }));
  }

 private groupBy(iterable: { date: string; list: WeatherForecastModel }[], fn: { (item: { date: any }): any; (arg0: any): any }) {
   const groups = new Map();
   for (const item of iterable) {
     const key = fn(item);
     if (!groups.has(key)) groups.set(key, []);
     groups.get(key).push(item);
   }
   return groups;
 }

 public kToC(kelvin: any) {
    let c = (parseFloat(kelvin) - 273.15);
    const fToCel = parseFloat(c.toFixed(2));
    return fToCel + String.fromCodePoint(8451);
  }

}
