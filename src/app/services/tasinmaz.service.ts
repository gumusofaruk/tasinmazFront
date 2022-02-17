import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Tasinmaz } from '../models/tasinmaz';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class TasinmazService {

  apiUrl = "https://localhost:44376/api/"; 
  constructor(private httpClient: HttpClient) { }
  getTasinmazs():Observable<ListResponseModel<Tasinmaz>> {
    let newPath=this.apiUrl+"Tasinmazs/getall";
    return this.httpClient
      .get<ListResponseModel<Tasinmaz>>(newPath)
      ;
  }
  getTasinmazsByIl(ilId:number):Observable<ListResponseModel<Tasinmaz>> {
    let newPath=this.apiUrl+"Tasinmazs/getallbyilid?ilId="+ilId
    return this.httpClient
      .get<ListResponseModel<Tasinmaz>>(newPath)
      ;
  }
  add(tasinmaz:Tasinmaz):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"tasinmazs/add",tasinmaz)
  }
}
