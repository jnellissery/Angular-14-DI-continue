import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class CommonService {
_randomnumber;
  constructor() {
    this._randomnumber=Math.floor(Math.random()*1000+1);
   }
   get randomnumber(){
     return this._randomnumber;
   }
   

}