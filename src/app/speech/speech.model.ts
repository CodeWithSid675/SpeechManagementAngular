export class Speech {
    constructor(public id: number,
             public userId: number, 
             public author: string,
             public subjectKeyword: string, 
             public date: string,
             public speechContent: string,
             public mailId: string
            ){}
 }