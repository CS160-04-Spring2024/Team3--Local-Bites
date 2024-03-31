import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,) { }

  registerClient(SignupRequestDTO:any): Observable<any>{
    return this.http.post(BASIC_URL + "client/sign-up", SignupRequestDTO);
  }

  registerCompany(SignupRequestDTO:any): Observable<any>{
    return this.http.post(BASIC_URL + "company/sign-up", SignupRequestDTO);
  }

}
