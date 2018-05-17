import { GuideService } from '../guide.service';
import { JumboListService } from '../../jumbo-and-list/jumboList.service';
import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import { Guide } from '../guide.model';

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.css']
})
export class GuideListComponent implements OnInit {
  guides: Guide[];
  constructor(private guideService: GuideService, private jumboListService: JumboListService) { }


  num = 20;

  ngOnInit() {
    this.num = 20;
    this.guideService.getGuides()
            .subscribe(
                (guides: Guide[]) => {
                    if (guides.length !== 0) {
                      this.guides = guides;
                    } else {
                      this.guides = null;
                    }
                }
            );
  }


  showMore() {
    this.num += 20;
  }

}

