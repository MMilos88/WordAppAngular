import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Result } from 'app/shared/Result';
import { CalculateWordCountResponse } from 'app/shared/CalculateWordCountResponse';



@Component({
  selector: 'file_container',
  templateUrl: 'file.component.html'
})
export class FileComponent implements OnInit {
  fileToUpload: any;
 
  // response: Result<CalculateWordCountResponse>;
  totalcount:number;

  constructor(private _http: HttpService) { }
  ngOnInit() {}


  coutWordsFromFile(files: FileList) 
  {
    this.fileToUpload = files.item(0);
     let formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name); 
    this._http.coutWordsFile(formData).subscribe(response =>
    {
      if(response.errorMessage == null && response.data != null){
         this.totalcount = response.data.totalWordCount;}
         else{
           console.log(response.errorMessage);
         }
    })
  };
}
