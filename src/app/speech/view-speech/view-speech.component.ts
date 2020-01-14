import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpeechService } from '../speech.service';
import { Speech } from '../speech.model';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-view-speech',
  templateUrl: './view-speech.component.html',
  styleUrls: ['./view-speech.component.css']
})
export class ViewSpeechComponent implements OnInit {
  allSpeaches: Speech[] = [];
  selectedSpeechIdex = 0;
  searchKey = "";
  emailId = "";
  speechForm = new FormGroup({
    subjectKeyword: new FormControl('', Validators.required),
    speechContent: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    id: new FormControl(''),
    userId: new FormControl(''),
  });
  speechData: any;


  constructor(private speechService: SpeechService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.getAllSpeeches();
  }

  //API call to get list of speeches
  getAllSpeeches() {
    this.spinner.show();
    this.speechService.getAllSpeeches()
      .subscribe(data => {
        console.log(data);
        this.allSpeaches = [];
        if (data && data.length > 0) {
          this.allSpeaches =  data.reverse();
          let index = this.selectedSpeechIdex ? this.selectedSpeechIdex : 0;
          this.setFormValue(this.allSpeaches[index],index)
          this.speechData = this.allSpeaches[index];
          this.spinner.hide();
        }

      },
      errorCode => {
        console.log("Something went wrong");
        this.spinner.hide();
      });
  }
  
  //Prepopulating form data(speech details)
  setFormValue(form, index) {
    if (form) {
      this.selectedSpeechIdex = index;
      this.speechForm.setValue({
        subjectKeyword: form.subjectKeyword ? form.subjectKeyword : "",
        speechContent: form.speechContent ? form.speechContent : "",
        author: form.author ? form.author : "",
        date: form.date ? form.date : "",
        id: form.id ? form.id : "",
        userId: form.userId ? form.userId : "",
      });
    }
  }

  //Delete speech
  deleteSpeech() {
    this.spinner.show();
    if(confirm("Are you sure, you want to delete this speech?")){
      let speechId = this.speechForm.controls['id'].value;
      this.speechService.deleteSpeech(speechId)
        .subscribe(response => {
          this.spinner.hide();
          this.selectedSpeechIdex = 0;
          this.getAllSpeeches();
        },
        errorCode => {
          console.log("Something went wrong.")
          this.spinner.hide();
        });
    }
  }
 
  //Update Speech 
  updateSpeech() {
    this.spinner.show();
    let speechForm = this.speechForm.value;
    console.log("speechform update ===> ",JSON.stringify(speechForm));
    this.speechService.updateSpeech(speechForm)
      .subscribe(successCode => {
        this.spinner.hide();
        alert("Speech updated successfully..!!");
        this.getAllSpeeches(); // After updating speech details succesfully, invoking  get all speeches api
      },
      errorCode => {
        this.spinner.hide();
        console.log("Something went wrong..!!")
      });
  }

  //Reset speech form
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

  //Validating Email id 
  validateEmail(){
      let regExpression = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if(this.emailId && regExpression.test(this.emailId)){
        return false
      }
      return true;
  }

//Send email function
  sendEmail(){
    // console.log("Speach details sent to "+this.emailId);
    // console.log("Speech Data => ", this.speechData);
    this.spinner.show();
    let mailData = {
      mailAddress: this.emailId,
      senderAddress: 'sidmishra675@gmail.com',
      data: this.speechData 
    }
    console.log('Mail Data => '+JSON.stringify(mailData));
      this.speechService.sendMessage(mailData).subscribe(res =>{
        if(res){
          this.spinner.hide();
          alert("Mail send successful");
        }
      },err=>{
        this.spinner.hide();
        alert("Something went wrong in sending mail");
      })
  }


}
