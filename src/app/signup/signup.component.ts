import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../login/login.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService,private spinner: NgxSpinnerService) { }
    loginSuccess = false;
    userName:String;
    password:String;
    mailId:any;
    confirmPassword:String;
    errorMessage:String ='';
    check:boolean = false;
    signUpSuccess:boolean = false;
    ngOnInit() {
        this.signUpSuccess = false;
        //   this.router.navigate(['']);
    }

    onSignUp(){
        if(!this.userName){
            this.errorMessage = "Please enter username";
            return false;
        }
        if(!this.password){
            this.errorMessage = "Please enter password";
            return false;
        }
        if(this.validateEmail()){
            this.errorMessage = "Please enter valid mailId";
            return false;
        }
        if(!this.confirmPassword){
            this.errorMessage = "Please confirm the password";
            return false;
        }
        if(this.password != this.confirmPassword){
            this.errorMessage = "Password does not match ";
            return false;
        }
        this.spinner.show();
        let payload = {
            userName:this.userName,
            email:this.mailId,
            password:this.password
        }
        console.log("SignUp Data : ",payload);

        this.authService.signUp(payload).subscribe((res:Response)=>{
            console.log(res);
            // let responseSuccess = res.body;
            // console.log(res.body);
            let response = JSON.parse(res["_body"]);
            if(response["code"] == 200){
                this.spinner.hide();
                // console.log(responseSuccess.success)
                this.signUpSuccess = true;
                // this.router.navigate(['/speech']);
            }else if(response["code"] == 400 || response["code"] == 204){
                this.spinner.hide();
                this.errorMessage = response["message"];
                return false;
            }
        },err=>{
            this.spinner.hide();
            // alert(use)
            console.log("Something went wrong during signup",err);
        })
        
    }

    //Validating Email id 
  validateEmail(){
    let regExpression = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(this.mailId && regExpression.test(this.mailId)){
      return false
    }
    return true;
}

onChange(){
    this.errorMessage = "";
}

}