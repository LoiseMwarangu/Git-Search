import { Component, OnInit } from '@angular/core';
import {GitsearchService} from '../service/gitsearch.service'
import { User } from '../user';
import{ Repository } from '../repository';


@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css'],
})

export class GitsearchComponent implements OnInit {
  user:User;
  repos:Repository;
  public username:string;
  reposArray:any[];

  constructor(private _gitsearch:GitsearchService ) {}

  searchProfile(){
    this._gitsearch.updateProfile(this.username);
    this._gitsearch.profileRequest();
    this._gitsearch.repoRequest();
    this.reposArray = this._gitsearch.reposArray;
     }
  ngOnInit() {
    this._gitsearch.profileRequest();
    this.user = this._gitsearch.user;

    this._gitsearch.repoRequest();
    this.reposArray = this._gitsearch.reposArray;
  }

}
