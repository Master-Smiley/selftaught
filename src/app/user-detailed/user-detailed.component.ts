import { Component, OnInit } from '@angular/core';
import { GuideService } from './../guide/guide.service';
import { Guide } from './../guide/guide.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detailed',
  templateUrl: './user-detailed.component.html',
  styleUrls: ['./user-detailed.component.css']
})
export class UserDetailedComponent implements OnInit {

  constructor(private guideService: GuideService, private router: Router) { }

  num = 20;
  guides: Guide[];
  username: string;
  guidesExist = false;
  loaded = false;
  guidesQuantity: number;


  ngOnInit() {
    this.guideService.getUserGuides(this.router.url)
      .subscribe(
        (guides: Guide[]) => {
          this.guides = guides;
          this.guidesExist = true;
          this.loaded = true;
          this.guidesQuantity = this.guides.length;
        }
      );

    this.guideService.getUserUsername(this.router.url)
      .subscribe(
        (object => {
          console.log(object);
          this.username = object.username;
          console.log(this.username);
        })
      );
  }

  showMore() {
    this.num += 20;
  }
}
