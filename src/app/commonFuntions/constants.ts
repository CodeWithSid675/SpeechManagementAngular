export class Constants{
    public static get BASE_URL(): string { return window.location.origin; };
    public static get API_URL(): string { return "http://localhost:1337/speeches" };// for node api 
    // public static get API_URL(): string { return "http://localhost:8080/speeches" };//for spring api
    public static get Mail_URL(): string { return "http://localhost:1337/sendmail" };  // for node mail service
    public static get LOGIN_URL(): string { return "http://localhost:1337/login" };  // for node login
    public static get SIGNUP_URL(): string { return "http://localhost:1337/signup" };  // for node signup
    // public static get Mail_URL(): string { return "http://localhost:8080/speeches/sendmail" };  // for spring mail service
    // public static get LOGIN_URL(): string { return "http://localhost:8080/speeches/login" };  // for spring login
    // public static get SIGNUP_URL(): string { return "http://localhost:8080/speeches/signup" };  // for spring signup    

}