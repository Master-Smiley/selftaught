import { Component, OnInit } from '@angular/core';
import { Guide } from '../guide/guide.model';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-guide',
  templateUrl: './create-guide.component.html',
  styleUrls: ['./create-guide.component.css']
})
export class CreateGuideComponent implements OnInit {

  rform: FormGroup;

  constructor(private fb: FormBuilder) {
  }



  save(model: Guide) {
    console.log(model);
  }

  ngOnInit() {
    this.rform = this.fb.group({
      title : ['', Validators.compose([Validators.required])],
      description : ['', Validators.compose([Validators.required])],
      prereqs: ['', Validators.compose([Validators.required])],
      experienceLevel: ['', Validators.required],
      guideResources: this.fb.array([
        this.initGuideResource()
      ])

    });
  }

    initGuideResource() {
      return this.fb.group({
        resourceTitle: [null, Validators.compose([Validators.required])],
        resourceLink: [null, Validators.compose([Validators.required])],
        resourceTime: [null, Validators.compose([Validators.required])],
        resourceContent: [null, Validators.compose([Validators.required])]
      });
    }

    addGuideResource() {
      // add guide to the list
      const control = <FormArray>this.rform.controls['guideResources'];
      control.push(this.initGuideResource());
  }

    removeGuideResource(i: number) {
      // remove guide from the list
      const control = <FormArray>this.rform.controls['guideResources'];
      control.removeAt(i);
  }


}
