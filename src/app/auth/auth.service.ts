import { ErrorsService } from '../errors/errors.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import { jwt } from 'jsonwebtoken';


@Injectable()
export class AuthService {
    domain = 'https://www.mighty-escarpment-97466.herokuapp.com';
    constructor(private http: Http, private errorService: ErrorsService) {}

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
        return this.http.post(this.domain + '/user/signup', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                console.log("catch in signup");
                console.log(error);
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }


    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.domain + '/user/login', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    getUsername() {
        return localStorage.getItem('username');
    }

}
