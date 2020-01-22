import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './login.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService, private spinner: NgxSpinnerService) { }
    loginSuccess = false;
    mailId:any;
    password:String;
    errorMessage:String ='';

    ngOnInit() {
          this.router.navigate(['']);
    }

    onLogin() {
        if(!this.mailId && !this.password){
            this.errorMessage = "Please enter mailId and password";
            return false;
        }
        if(!this.mailId){
            this.errorMessage = "Please enter mailId";
            return false;
        }
        if(!this.password){
            this.errorMessage = "Please enter password";
            return false;
        }
        if(this.validateEmail()){
            this.errorMessage = "EmailId is not valid";
            return false;
        }
        this.spinner.show();
        let payload = {
            email:this.mailId,
            password:this.password
        };
        // console.log("Login Data : ", payload);
        this.authService.login(payload).subscribe((res:Response)=>{
            console.log(res);
            let response = JSON.parse(res["_body"]);
            // console.log(res["_body"]);
            if(response["code"] == 200){
                sessionStorage.setItem("userId",JSON.stringify(this.mailId));
                this.loginSuccess = true;
                this.spinner.hide();
                this.router.navigate(['/speech']);
            }else if(response["code"] == 204 || response["code"] == 400){
                this.spinner.hide();
                this.errorMessage = response["message"];
                return false;
            }
        },err=>{
            this.spinner.hide();
            console.log("Something went wrong",err);
        })
    }

    onChange(){
        this.errorMessage = "";
    }

    signUpRoute(){
        // debugger;
        this.router.navigate(['/signup']);
    }

    validateEmail(){
        let regExpression = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(this.mailId && regExpression.test(this.mailId)){
          return false
        }
        return true;
    }
}