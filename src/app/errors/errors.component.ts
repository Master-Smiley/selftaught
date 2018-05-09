import { ErrorsService } from './errors.service';
import { Error } from './error.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  error: Error;
  display = 'none';
  constructor(private errorService: ErrorsService) { }

  onErrorHandled() {
    this.display = 'none';
  }

  ngOnInit() {
    this.errorService.errorOccurred.subscribe(
    (error: Error) => {
      this.error = error;
      this.display = 'block';
    });
  }

}
