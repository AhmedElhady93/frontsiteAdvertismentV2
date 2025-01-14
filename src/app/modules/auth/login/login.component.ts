import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { RegisterComponent } from '../register/register.component';
import { AuthServiceProxy, ClientRegisterCommand, LoginCommand, UserManagementServiceProxy } from 'src/shared/service-proxies/service-proxies';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  LoginCommand=new LoginCommand;
  constructor(private fb: FormBuilder,public dialog: MatDialog, private route: Router,
     public dialogRef: MatDialogRef<LoginComponent>,private AuthServiceProxy:AuthServiceProxy,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  this.initForm();
  }

  get fc() {
    return this.loginForm.controls;
  }

  private initForm(){
    this.loginForm = this.fb.group({
      //email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['',Validators.required],
      password: ['', Validators.required],
      rememberMe: [''],
    });
  }

  onSubmit(){
   
    debugger;
  
    this.LoginCommand.username=this.loginForm.value.phoneNumber;
    this.LoginCommand.password=this.loginForm.value.password;
    this.AuthServiceProxy.login(this.LoginCommand).subscribe((data:any)=>{
     let obj =data.data;
      if(obj.token != null)
       { debugger;
         localStorage.setItem('isLoggedin', 'true');
         localStorage.setItem('isAuthenticated', 'true');
             localStorage.setItem('userToken',obj.token );
             this._snackBar.open("تم تسجيل الدخول بنجاح"," تسجيل الدخول" ,{
               duration: 2220,
               
             });
             this.dialogRef.close();
            // this.route.navigateByUrl('/pages');
            window.location.reload();
           //  this.router.navigate(['/dashboard']);
             /** spinner starts on init */
       
             /** spinner ends after 5 seconds */
           
       }
       else{
       //  this.toastr.error( 'Error occured during login!');
       this._snackBar.open("اضافة","Error occured during login!" ,{
         duration: 2220,
         
       });
       }
     },
    err=>{debugger;
      console.log(err)
      this._snackBar.open("   ",err,{
        duration: 2220,
        
      });
      this.submitted = false;
    }
    
    )
  
   
  }

  closeDialog() {
    this.dialogRef.close();
  }
  
  switchToRegister(){
    this.dialogRef.close();
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  switchToForgetPassword(){
    this.dialogRef.close();
    const dialogRef = this.dialog.open(ForgetPasswordComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}