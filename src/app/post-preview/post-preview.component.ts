import { forEach } from '@angular/router/src/utils/collection';
import { GuideService } from '../guide/guide.service';
import { Component, OnInit, Input } from '@angular/core';
import { Guide } from '../guide/guide.model';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {
  @Input() guide: Guide;
  constructor(private guideService: GuideService) { }


  ngOnInit() {
  }


  totalHours(guide: Guide) {
    let totalTime = 0;
    (guide.guideResources).forEach(function(resource) {
      totalTime += resource.resourceTime;
    });
    if (totalTime === 1) {
      return totalTime + ' hr';
    } else {
      return totalTime + ' hrs';
    }
  }

  // preview clicked needs to render a page based on database info either on load or express rendering
  previewClicked(guide: Guide) {
    console.log('twas clicked');
  }
}
