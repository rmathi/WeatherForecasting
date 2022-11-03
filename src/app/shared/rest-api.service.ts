import { Injectable } from '@angular/core';
import {catchError, Observable, retry, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {WeatherForecastModel} from "./weatherForecast.model";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  // HttpClient API get() method => Fetch weather forecast details
  getWeather(cityName: string): Observable<any> {
    return this.http.get<WeatherForecastModel>('https://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&appid=fe3695759da76e0c9dcaf566634a08ed')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Error handling
  handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
