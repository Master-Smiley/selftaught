import { NgForm } from '@angular/forms/src/directives';
import { Component, Input, OnInit } from '@angular/core';
import { GuideResource } from './guide-resource.model';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'app-guide-resource',
  templateUrl: './guide-resource.component.html',
  styleUrls: ['./guide-resource.component.css']
})
export class GuideResourceComponent implements OnInit {

  @Input() guideResourceForm: FormGroup;

  constructor() { }

  ngOnInit() {}
}
