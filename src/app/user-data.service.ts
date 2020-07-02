import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  // tslint:disable-next-line: ban-types
  url: String;
  data: any;

  constructor(private httpClient: HttpClient) {
      this.url = 'http://192.168.43.153:5000/api/auth/user/login_fist_step';
  }

  sendtheCode(userdata) {
    console.log(userdata);
      return this.httpClient.post(`${this.url}`, userdata);
   }

  getEmail(){
    // return this.httpClient.post('http://192.168.43.153:5000/api/auth/user/login_first_step');

  }

  // logintheStudent(data) {
  //   console.log(data);
  //   // tslint:disable-next-line: no-string-literal


  //   const url = `${this.url}`;
  //   return this.http.post(url, data);
  // }

  // loginStudent(data) {
  //   return this.http.post(
  //     this.url + 'onregister', data);
  // }

  // setData(data) {
  //   this.data = data;
  // }

  // getData() {
  //   return this.data;
  // }
}
