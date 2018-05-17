import { EventEmitter, Injectable } from '@angular/core';
import { Error } from './error.model';

@Injectable()
export class ErrorsService {

  constructor() { }
  errorOccurred = new EventEmitter<Error>();
  handleError(error: any) {
    console.log("here's an error fam");
    console.log(error);
    const errorData = new Error(error.title, error.error.message);
    this.errorOccurred.emit(errorData);
  }
}
