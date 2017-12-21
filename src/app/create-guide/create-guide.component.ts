import { GuideService } from '../guide/guide.service';
import { Component, OnInit } from '@angular/core';
import { Guide } from '../guide/guide.model';
import { Form, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../auth/user.model';
import { GuideResource } from '../create-guide/guide-resource/guide-resource.model';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-create-guide',
  templateUrl: './create-guide.component.html',
  styleUrls: ['./create-guide.component.css']
})
export class CreateGuideComponent implements OnInit {

  rform: FormGroup;

  constructor(private fb: FormBuilder, public guideService: GuideService) {
  }


  save(model: FormGroup) {
    const newGuide = new Guide(
      model.value.title,
      model.value.description,
      model.value.prereqs,
      model.value.experienceLevel,
      model.value.guideResources,
      localStorage.getItem('userId'),
      localStorage.getItem('username')
    );
    this.guideService.addGuide(newGuide)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );

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
      // add guide resource to the list
      const control = <FormArray>this.rform.controls['guideResources'];
      control.push(this.initGuideResource());
  }

    removeGuideResource(i: number) {
      // remove guide resource from the list
      const control = <FormArray>this.rform.controls['guideResources'];
      control.removeAt(i);
  }

  ngOnInit() {
    this.rform = this.fb.group({
      title : [null, Validators.compose([Validators.required])],
      description : [null, Validators.compose([Validators.required])],
      prereqs: [null, Validators.compose([Validators.required])],
      experienceLevel: [null, Validators.required],
      guideResources: this.fb.array([
        this.initGuideResource()
      ])

    });
  }

}
