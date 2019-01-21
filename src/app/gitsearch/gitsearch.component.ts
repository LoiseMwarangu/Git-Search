import { Component, OnInit } from '@angular/core';
import {GitsearchService} from '../service/gitsearch.service'


@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitsearchComponent implements OnInit {

  constructor(private _gitsearchService:GitsearchService) { }

  ngOnInit() {
  }

}
