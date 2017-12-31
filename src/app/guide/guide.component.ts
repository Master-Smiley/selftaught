import { Component, OnInit } from '@angular/core';
import { Guide } from '../guide/guide.model';
import { GuideService } from '../guide/guide.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  new_guide: Guide;

  constructor(public guideService: GuideService, private router: Router) {
  }

  ngOnInit() {
    const new_url = this.router.url;
    // i need to change this to be type guide
    this.guideService.getGuide(new_url)
      .subscribe(res => { this.new_guide = res; });
    console.log(new_url);

  }

}
