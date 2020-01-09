import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Constants} from '../commonFuntions/constants';
import { Speech } from './speech.model';

@Injectable()
export class SpeechService {
    //JAVA DB URL
    articleUrl = Constants.API_URL;
    mailUrl = Constants.Mail_URL;
    // Header for the request
    headers = new Headers({ 'Content-Type': 'application/json' });
    requestOptions = new RequestOptions({ headers: this.headers });

    constructor(private http:Http) { 
    }
    
    //Fetch all Speeches
    getAllSpeeches(): Observable<Speech[]> {
        return this.http.get(this.articleUrl)
       .map(this.extractData)
	   .catch(this.handleError);

    }

    //Create Speech
    createSpeech(article: Speech):Observable<number> {

        return this.http.post(this.articleUrl, article, this.requestOptions)
               .map(success => success.status)
               .catch(this.handleError);
    }
   
    //Update Speech
    updateSpeech(article: Speech):Observable<number> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put(this.articleUrl , article, this.requestOptions)
               .map(success => success.status)
               .catch(this.handleError);
    }

    //Delete Speech	
    deleteSpeech(articleId: string): Observable<number> {
	return this.http.delete(this.articleUrl +"/"+ articleId)
	       .map(success => success.status)
               .catch(this.handleError);
    }
    
    // Handling success resposne
    private extractData(res: Response) {
	let body = res.json();
        return body;
    }

    //email sending
    sendMessage(body) {
        return this.http.post(this.mailUrl, body)
        .map(res => res.status)
         .catch(this.handleError);
      }

    // Handling error resposne
    private handleError (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.status);
    }
} 