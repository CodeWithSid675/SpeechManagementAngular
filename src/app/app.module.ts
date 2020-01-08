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


// import { ModalMoldule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent,
    CreateSpeechComponent,
    SearchSpeechComponent,
    ViewSpeechComponent,
    SpeechComponent,
    SearchSpeechPipe
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    // ModalModule,
    // ModalModule.forRoot()
  ],
  providers: [SpeechService],
  bootstrap: [AppComponent]
})
export class AppModule { }
