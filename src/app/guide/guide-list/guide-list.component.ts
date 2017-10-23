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

  ngOnInit() {
    this.guideService.getGuides()
            .subscribe(
                (guides: Guide[]) => {
                    this.guides = guides;
                }
            );
  }
}

