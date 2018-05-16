import { Component, OnInit, Output } from '@angular/core';
import {JumboListService} from './../jumbo-and-list/jumboList.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor(public jumboListService: JumboListService) { }


  ngOnInit() {
  }

}
