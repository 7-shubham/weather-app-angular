import { Component, OnInit } from '@angular/core';
import { Weather, WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weatherData!: WeatherData
  cityName:string = 'London'

  constructor(private weatherService:WeatherService){}

  ngOnInit(): void {
    
    this.getWeatherData(this.cityName);
    this.cityName = '';
   
  }

  onSubmit(){
     this.getWeatherData(this.cityName);
     this.cityName = '';
  }

  getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe(res=>{
      this.weatherData = res;
      console.log(res)
    })
  }
 
}
