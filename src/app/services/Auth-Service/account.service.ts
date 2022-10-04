import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
 
baseURL = environment.adminBaseURL;
logIn(){
  console.log(this.baseURL)
};
  constructor(private http:HttpClient) { }


  //superadmin LogIn function
  // AdminLogin(AdminlLoginForm:any){
  //   return this.http.post<any>(this.AdminLoginApi ,AdminlLoginForm);
  // }

  // superAdmin Logout funcation
  // AdminLogout(loginID:any){
  //   return this.http.post<any>(this.AdminLogoutApi,{loginID});
  // }
 
}