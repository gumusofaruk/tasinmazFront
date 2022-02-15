import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Il } from '../models/il';

@Injectable({
  providedIn: 'root'
})
export class IlService {

  apiUrl = "https://localhost:44376/api/ils/getall"; 
  constructor(private httpClient: HttpClient) { }
  getIls():Observable<ListResponseModel<Il>> {
    return this.httpClient
      .get<ListResponseModel<Il>>(this.apiUrl)
      ;
  }
}
