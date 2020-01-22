import { Routes, RouterModule } from "@angular/router";
import { SPEACH_ROUTES } from '../speech/speech.routes'
import { SpeechComponent } from '../speech/speech.component';
// import { SignUpComponent } from "./signup/signup.component";

export const LOGIN_ROUTES: Routes = [
    { path: 'speech', component: SpeechComponent, children: SPEACH_ROUTES },
    // { path: 'login/signup', component: SignUpComponent}
    // { path: '', component: SpeechComponent, children: SPEACH_ROUTES }
];