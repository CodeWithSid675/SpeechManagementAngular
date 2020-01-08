import { Routes,RouterModule } from "@angular/router";

import { CreateSpeechComponent } from './create-speech/create-speech.component';
import { ViewSpeechComponent } from './view-speech/view-speech.component';
import { SearchSpeechComponent } from './search-speech/search-speech.component';

export const SPEACH_ROUTES: Routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'create', component: CreateSpeechComponent },
    { path: 'view', component: ViewSpeechComponent },
    { path: 'search', component: SearchSpeechComponent }
];

