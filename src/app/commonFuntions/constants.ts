export class Constants{
    public static get BASE_URL(): string { return window.location.origin; };
    // public static get JOSN_DB_URL(): string { return "http://localhost:1337/speeches" };// for node api 
    public static get JOSN_DB_URL(): string { return "http://localhost:8080/speeches" };//for spring api
    

}