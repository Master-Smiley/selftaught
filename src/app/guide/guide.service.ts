import { ErrorsService } from '../errors/errors.service';
import { Guide } from './guide.model';
import { Headers, Http, Response } from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GuideService {
    domain = 'https://mighty-escarpment-97466.herokuapp.com';
    private guides: Guide[] = [];
    constructor(private http: Http, private errorService: ErrorsService) {}

    submissionSuccess = false;
    addGuide(guide: Guide) {
        const body = JSON.stringify(guide);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post(this.domain + '/create' + token, body, {headers: headers})
            .map((response: Response) => {
                response.json();
                this.submissionSuccess = true;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json);
            });
    }

    getGuides() {
        console.log("before getGuides Service");
        return this.http.get(this.domain + '/guides')
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
            .catch((error: Response) => {
                console.log("catch in get guides");
                console.log(error);
                this.errorService.handleError(error.json());
                return Observable.throw(error.json);
            });
    }

    getGuide(url: string) {
        return this.http.get(this.domain + url)
            .map((response: Response) => {
                const guide = response.json().obj;
                console.log(guide);
                return guide;
            });
    }

    getUserGuides(url: string) {
        return this.http.get(this.domain + url)
            .map((response: Response) => {
                const guides = response.json().obj;
                const transformedGuides: Guide[] = [];
                for (const guide of guides) {
                    transformedGuides.push(new Guide(
                        guide.title, guide.description, guide.prereqs,
                        guide.experience, guide.guideResources, guide.user, guide.username
                    ));
                }
                this.guides = transformedGuides.reverse();
                return transformedGuides.reverse();
            });
    }

    getUserUsername(url: string) {
        return this.http.get(this.domain + url)
            .map((response: Response) => {
                return response.json();
            });
    }
}
