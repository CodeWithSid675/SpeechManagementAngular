import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SpeechService } from '../speech.service';
import { Speech } from '../speech.model';

import { NgxSpinnerService } from 'ngx-spinner'
@Component({
  selector: 'app-share-speech',
  templateUrl: './share-speech.component.html',
  styleUrls: ['./share-speech.component.css']
})
export class ShareSpeechComponent implements OnInit {
  searchKey = "";
  allSpeaches: Speech[] = [];
  selectedSpeechIdex = "";
  speechForm = new FormGroup({
    subjectKeyword: new FormControl('', Validators.required),
    speechContent: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    id: new FormControl(''),
    userId: new FormControl(''),
  });


  constructor(private speechService: SpeechService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles() {
    this.spinner.show();
    this.speechService.getSharedArticleSpeechID()
      .subscribe(data => {
        console.log("Speech Fetched ===> ",JSON.stringify(data));
        if (data && data.length > 0) {
          this.allSpeaches = data.reverse();
          this.setFormValue(this.allSpeaches[0],0);
          this.spinner.hide();
        }
        this.spinner.hide();
      },
      errorCode => {
        alert("Something went wrong");
        this.spinner.hide();
      });
  }

  setFormValue(form,index){
    if(form){
      this.selectedSpeechIdex = index;
      this.speechForm.setValue({
        subjectKeyword: form.subjectKeyword ? form.subjectKeyword :"",
        speechContent: form.speechContent ? form.speechContent :"",
        author: form.author ? form.author :"",
        date: form.date ? form.date :"",
        id : form.id ? form.id :  "",
        userId : form.userId ? form.userId :  "",
      });
    }
  }

  resetForm(){
    this.speechForm.reset();
    if(this.searchKey){
      this.selectedSpeechIdex = null;
    }else{
      if(this.allSpeaches.length > 0 ){
        this.setFormValue(this.allSpeaches[0],0)
      }
    }
  }
}
