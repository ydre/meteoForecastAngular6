import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../meteo.service';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  meteoArray:any;
  celsius: number;
  now: Date;
  nowStr: Date;
  today: string = "Today";

  constructor(public _meteoService:MeteoService) { }

  ngOnInit() {
    this._meteoService.getMeteo().subscribe(
      response=>{console.log(response);
      this.meteoArray = response;
      }
    );
   
  }
  convertToCelsius(kelvin: number){
     this.celsius = kelvin - 273,15;
     return this.celsius;
  }

  getClass(dayOrNight: string){
    return dayOrNight ==='d' ? 'day' : 'night';
  }

  isHotOrCold(temp: number){
    let currentTemp = this.convertToCelsius(temp);
    return currentTemp > 15 ? "hot" : "cold";
  }

  isRightNow(date: string){
   this.now= new Date();
   this.nowStr= new Date(date);
    return this.now.getUTCDay() === this.nowStr.getUTCDay() ? this.today : "";   
  }
}
