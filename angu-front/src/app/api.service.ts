import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  users: any;
  constructor(private _http: HttpClient) { }
  apiUrl ='http://localhost:8085/';

  //get all data
  getAllData():Observable<any>{
    return this._http.get(`${this.apiUrl+"api/student/"}`);
  }
}
