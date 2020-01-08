import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchSpeechfilter'
})

@Injectable()
export class SearchSpeechPipe implements PipeTransform {
 transform(items: any[], value: string): any[] {
    if(value)  {
        if (!items) return [];
        return items.filter(it =>it["subjectKeyword"] != null? it["subjectKeyword"].toLowerCase( ).indexOf(value.toLowerCase( )) >= 0:null);
    }
   else{
       return items;
   } 
 }
}