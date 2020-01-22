import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routing } from "./app.routes";

import {SearchSpeechPipe} from './commonFuntions/speechPipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CreateSpeechComponent } from './speech/create-speech/create-speech.component';
import { ViewSpeechComponent } from './speech/view-speech/view-speech.component';
import { SearchSpeechComponent } from './speech/search-speech/search-speech.component';
import {SpeechComponent} from './speech/speech.component';

import {SpeechService} from './speech/speech.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { AuthService } from './login/login.service';
// import { ModalMoldule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent,
    CreateSpeechComponent,
    SearchSpeechComponent,
    ViewSpeechComponent,
    SpeechComponent,
    SearchSpeechPipe,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    NgxSpinnerModule
    // ModalModule,
    // ModalModule.forRoot()
  ],
  providers: [SpeechService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
