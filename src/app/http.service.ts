import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result  } from './shared/Result';
import { CalculateWordCountResponse } from './shared/CalculateWordCountResponse';
import { CalculateWordCountRequest } from './shared/CalculateWordCountRequest';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable(
{
  providedIn: 'root'
}
)
export class HttpService {

  constructor(private _http: HttpClient) { }

  coutWordsFile(data:any): Observable<Result<CalculateWordCountResponse>>
  { 
    var url = environment.service_url+'/CalculateWordCountFromFile';
     return this._http.post<Result<CalculateWordCountResponse>>(
      url,data
      );    
  }

  coutWordsDb(): Observable<Result<CalculateWordCountResponse>>
  {
    var url = environment.service_url+'/CalculateWordCountFromDB'
    return  this._http.post<Result<CalculateWordCountResponse>>(
      url,{}
      );
  }

  coutWordsText(input:string): Observable<Result<CalculateWordCountResponse>>
  {
    var data = new CalculateWordCountRequest;
    data.InputText = input;
    const url = environment.service_url+'/CalculateWordCount'
    return  this._http.post<Result<CalculateWordCountResponse>>(
      url,data
      );
  }

  
}
