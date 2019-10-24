import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: '',
  templateUrl: 'data-base.component.html'  
})
export class DataBaseComponent implements OnInit {
  
  totalcount:number;

  constructor(private _http: HttpService) { }

  ngOnInit() {  }

  coutWordsDb($event){
  this._http.coutWordsDb().subscribe(response =>
    {
      if(response.errorMessage == null && response.data != null){
         this.totalcount = response.data.totalWordCount;}
         else{
           console.log(response.errorMessage);
         }
    })
  };
}
