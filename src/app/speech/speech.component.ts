import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit {
  currentTab: string = "VIEW";
  constructor(private router: Router) { }

  ngOnInit() {
    let url = this.router.url;
    if(url.indexOf("create") >= 0){
      this.currentTab = "CREATE";
    }else if(url.indexOf("view") >= 0){
      this.currentTab = "VIEW";
    }else if(url.indexOf("search") >= 0){
      this.currentTab = "SEARCH";
    }else{
      console.log("Something went wrong >> ",url)
    }
  }

  changeTab(tab) {

    

    // let abc = Boolean("FALSE".toLowerCase());
    // console.log("abc   >>> ", typeof (abc), abc)
    switch (tab) {
      case "view":
        this.currentTab = "VIEW";
        break;
      case "create":
        this.currentTab = "CREATE";
        break;
      case "search":
        this.currentTab = "SEARCH";
        break; 
      default:
        console.log("Something went wrong..!! ", tab);
    }
    this.router.navigate(['speech/' + tab]);
  }

  logout(){
      sessionStorage.removeItem('userId');
      this.router.navigate(['/login']);
  }

}
