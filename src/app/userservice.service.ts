import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDTO} from './userdto';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private http: HttpClient) { }
// list-all-user
  baseUrl = 'http://localhost:8006/user-api/users';

  // view-support-team
  baseUrl1 = 'http://localhost:8006/support-api/support';

// view-support-team
  baseUrl2 = 'http://localhost:8006/property-api/properties';



  // list-all-user
  listAllUsers(): Observable<any> {

    return this.http.get(`${this.baseUrl}` );
  }

  deleteUser(email: string): Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/${email}`, { responseType: 'text' });
  }


// view-support-team

  listAllSupport(): Observable<any>
  {
    return this.http.get(`${this.baseUrl1}`);
  }

  deleteSupport(username: string): Observable<any> {
    return this.http.delete(`${this.baseUrl1}/${username}`, { responseType: 'text' });
  }


// create
  createSupport(Customersupport: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl1}`, Customersupport);
  }


  // properties


  listAllProperty(): Observable <any> {

    return this.http.get(`${this.baseUrl2}` );
  }

  deleteProperty(id: number): Observable <any>
  {
    return this.http.delete(`${this.baseUrl2}/${id}`, { responseType: 'text' });
  }


}










