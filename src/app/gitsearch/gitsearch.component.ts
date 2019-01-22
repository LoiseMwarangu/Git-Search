import { Component, OnInit } from '@angular/core';
import {GitsearchService} from '../service/gitsearch.service'


@Component({
  moduleId: module.id,
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitsearchComponent implements OnInit {
  user:any;
  constructor(private _gitsearchService:GitsearchService ,alertService:AlertsService,private http:HttpClient) {
    this._gitsearchService.getUser().subscribe(user =>{
      this.user=user;
      console.log(this.user)
    });
   }

  ngOnInit() {
  }

}
