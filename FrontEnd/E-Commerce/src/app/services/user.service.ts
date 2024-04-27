import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from '../shared/models/model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = environment.baseUrl

  constructor(private _http: HttpClient) { }

  userRegister(data:any){
    return this._http.post<userModel>(`${this._url}/user/register`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  userLogin(data:any){
    return this._http.post<userModel>(`${this._url}/user/login`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  
}
