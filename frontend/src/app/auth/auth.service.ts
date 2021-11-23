import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public login(): Observable<any> {
    return this.http.post('https://localhost:3000/login', { email: 'example@gmail.com', password: 'qwer1234' });
  }

  public logout(): Observable<any> {
    return this.http.post('https://localhost:3000/logout', {});
  }


}
