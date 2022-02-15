import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Tasinmaz } from '../models/tasinmaz';

@Injectable({
  providedIn: 'root'
})
export class TasinmazService {

  apiUrl = "https://localhost:44376/api/Tasinmazs/getall"; 
  constructor(private httpClient: HttpClient) { }
  getTasinmazs():Observable<ListResponseModel<Tasinmaz>> {
    return this.httpClient
      .get<ListResponseModel<Tasinmaz>>(this.apiUrl)
      ;
  }
}
