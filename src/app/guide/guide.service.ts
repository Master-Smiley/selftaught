import { Guide } from './guide.model';
import { Headers, Http, Response } from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GuideService {
    constructor(private http: Http) {}

    addGuide(guide: Guide) {
        const body = JSON.stringify(guide);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/create', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json));
    }
}
