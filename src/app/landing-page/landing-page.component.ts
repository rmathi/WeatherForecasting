import { Component, OnInit } from '@angular/core';
import {CityDetails, ListForeCast, WeatherForecastModel} from "../shared/weatherForecast.model";
import {RestApiService} from "../shared/rest-api.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public cityData: CityDetails | undefined;
  public weatherLists: ListForeCast[] | undefined;
  constructor(private restApi: RestApiService) { }

  ngOnInit(): void {
  }

  onChange(event: Event) {
    const cityName = (event.target as HTMLInputElement).value;
    this.restApi.getWeather(cityName).subscribe((data: WeatherForecastModel) => {
      this.cityData = data.city;
      this.weatherLists = data.list;
    })
  }
}
