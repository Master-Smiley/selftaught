import { Guide } from './guide.model';
import { Headers, Http, Response } from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GuideService {
    private guides: Guide[] = [];
    constructor(private http: Http) {}

    addGuide(guide: Guide) {
        const body = JSON.stringify(guide);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('http://localhost:3000/create' + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json));
    }

    getGuides() {
        return this.http.get('http://localhost:3000/guides')
            .map((response: Response) => {
                const guides = response.json().obj;
                const transformedGuides: Guide[] = [];
                for (const guide of guides) {
                    transformedGuides.push(new Guide(
                        guide.title, guide.description, guide.prereqs,
                         guide.experience, guide.guideResources, guide.user, guide.username
                    ));
                }
                this.guides = transformedGuides;
                return transformedGuides;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
