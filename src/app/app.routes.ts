import { Routes,RouterModule } from "@angular/router";
// import { SPEACH_ROUTES } from './speech/speech.routes'
// import {SpeechComponent} from './speech/speech.component';
import { LoginComponent } from './login/login.component';
import { LOGIN_ROUTES } from './login/login.routes';
import { SignUpComponent } from './signup/signup.component';

export const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent, children: LOGIN_ROUTES },
    { path: 'signup', component: SignUpComponent},
    { path: '', component: LoginComponent, children: LOGIN_ROUTES }

];

export const routing = RouterModule.forRoot(APP_ROUTES);