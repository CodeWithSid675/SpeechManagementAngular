import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../commonFuntions/constants';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    loginURL = Constants.LOGIN_URL;
    registerURL = Constants.SIGNUP_URL;
    // store the URL so we can redirect after logging in
    // public redirectUrl: string;

    constructor(
        private http: Http,
        private router: Router
    ) { }

    login(body) {
        return this.http.post(this.loginURL, body).map((res: Response) => {
            console.log("Service ")
            return res;
        }).catch(this.handleError);
    }

    signUp(body){
        return this.http.post(this.registerURL, body).map((res: Response) => {
            return res;
        }).catch(this.handleError);
    }

    // Handling error resposne
    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
}