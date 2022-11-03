import {Component, Input, OnInit} from '@angular/core';
import {CityDetails, WeatherForecastModel} from "../../shared/weatherForecast.model";

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
  @Input() city: CityDetails | undefined;
  currentDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }
}
