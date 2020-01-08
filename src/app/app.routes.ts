import { Routes,RouterModule } from "@angular/router";
import { SPEACH_ROUTES } from './speech/speech.routes'
import {SpeechComponent} from './speech/speech.component';

export const APP_ROUTES: Routes = [
    { path: 'speech', component: SpeechComponent, children: SPEACH_ROUTES },
    { path: '', component: SpeechComponent, children: SPEACH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);