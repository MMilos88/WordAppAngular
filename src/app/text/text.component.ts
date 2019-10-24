import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'text_container',
  templateUrl: 'text.component.html',
  styleUrls: ['text.component.css']
})

export class TextComponent implements OnInit {

   tekst: string = '';
   fileToUpload: any;
   totalcount : number;
   
   constructor(private _httpservice: HttpService) { }
  ngOnInit() {}  
  
  countWords($event)
  {    
   this._httpservice.coutWordsText(this.tekst).subscribe(response =>
      {
        if(response.errorMessage == null && response.data != null){
           this.totalcount = response.data.totalWordCount;}
           else{
             console.log(response.errorMessage);
           }
      })
    };
}
