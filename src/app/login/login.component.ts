
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/Auth-Service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  AdminlLoginForm:any = FormGroup;
  errorMessage : any ;
  display : any;
  currentUserLoginId: any ;
  loginFrom : any;

  constructor(
    public fb: FormBuilder,
    private services : AccountService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Data from login from
    this.AdminlLoginForm = this.fb.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]],
    });
   this.services.logIn();
  }
  
  

  // Login Click Funcation
  // onLogin() {
  //  this.services.AdminLogin(this.AdminlLoginForm.value).subscribe((res)=>{
  //   this.errorMessage=res.responsemessage;
  //   this.currentUserLoginId = res.loginid ;
  //   if(res.responsecode==0){
  //     this.snackBar.open(res.responsemessage, '', {
  //     duration: 2000,
  //     verticalPosition: "top", // Allowed values are  'top' | 'bottom'
  //     horizontalPosition: "center" ,// Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
  //     panelClass: ["custom-style"]
  //     });
  //   }else if(res.responsecode==1){
  //     this.snackBar.open(res.responsemessage, '', {
  //       duration: 2000,
  //       verticalPosition: "top", // Allowed values are  'top' | 'bottom'
  //       horizontalPosition: "center" ,// Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
  //       panelClass: ["custom-style1"]
  //       });
  //   }else if(res.responsecode==3){
  //     this.openModal();
  //   }
  //  });
  // }

  // Model Open Funcation
  openModal(){
    this.display='block';
  }

  // Model close Funcation
  onCloseHandled(){
    this.display='none'
  }

  // onLogOut(){
  //   this.services.AdminLogout(this.currentUserLoginId).subscribe((data)=>{
  //     console.log(data.responsemessage);
  //     this.snackBar.open(data.responsemessage, '', {
  //       duration: 2000,
  //       verticalPosition: "top", // Allowed values are  'top' | 'bottom'
  //       horizontalPosition: "center" ,// Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
  //       panelClass: ["custom-style"]
  //       });
  //     this.onCloseHandled();
  //     this.router.navigate(['/']);
  //   });
  // }

}
