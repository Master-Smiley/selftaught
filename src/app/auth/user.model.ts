import { Guide } from '../guide/guide.model';


export class User {
    username: String;
    password: String;
    email?: String;
    guides?: any;


    constructor(username: string, password: string, email?: string, guides?: any) {

        this.username = username;
        this.password = password;
        this.email = email;
        this.guides = guides;
    }
}
