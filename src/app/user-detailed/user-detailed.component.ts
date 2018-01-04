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


  ngOnInit() {
    this.guideService.getUserGuides(this.router.url)
      .subscribe(
        (guides: Guide[]) => {
          this.guides = guides;
        }
      );

    this.guideService.getUserUsername(this.router.url)
      .subscribe(
        (username => {
          this.username = username;
          console.log(this.username);
        })
      );
  }

  showMore() {
    this.num += 20;
  }
}
