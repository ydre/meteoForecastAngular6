import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  apiKey = '4ec0d0917c7f11337d11799a3eb58c1a';
  url ;

  constructor(private _http:Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?id=6455259';
   }

   getMeteo(){
     return this._http.get(this.url+'&APPID='+this.apiKey).pipe(map((response: any) => response.json()));
   }

 
}
