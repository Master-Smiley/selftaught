import { GuideService } from '../guide.service';
import { Component, OnInit } from '@angular/core';
import { Guide } from '../guide.model';

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.css']
})
export class GuideListComponent implements OnInit {
  guides: Guide[];
  constructor(private guideService: GuideService) { }

  num = 20;
  guidesLength: number;

  ngOnInit() {
    this.num = 20;
    this.guideService.getGuides()
            .subscribe(
                (guides: Guide[]) => {
                    this.guides = guides;
                    this.guidesLength = guides.length;
                }
            );
  }
  showMore() {
    this.num += 20;
    console.log(this.num);
    console.log(this.guidesLength);
  }

}

