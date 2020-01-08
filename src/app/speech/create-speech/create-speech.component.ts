import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SpeechService } from '../speech.service';
import { Speech } from '../speech.model';

import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-create-speech',
  templateUrl: './create-speech.component.html',
  styleUrls: ['./create-speech.component.css']
})
export class CreateSpeechComponent implements OnInit {
//Component properties

allSpeaches: Speech[] = [];

allArticles: Speech[];
statusCode: number;
requestProcessing = false;
articleIdToUpdate = null;
processValidation = false;
//Create form
speechForm = new FormGroup({
    subjectKeyword: new FormControl('', Validators.required),
    speechContent: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),	   
});
//Create constructor to get service instance
constructor(private articleService: SpeechService) {
}
//Create ngOnInit() and and load articles
ngOnInit(): void {
}   

// On submit of create speach form
submitSpeechForm() {
 let speechForm = this.speechForm.value;
  speechForm.id = UUID.UUID();
  speechForm.userId = "testUser123";
  // speechForm.epochTime = new Date().getTime();
  console.log("speechForm ==== ",JSON.stringify(speechForm));
  this.articleService.createSpeech(speechForm)
     .subscribe(successCode => {
       alert("Speech added successfully..!!");
       this.speechForm.reset();
  });
}

}
