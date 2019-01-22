import { Component, OnInit } from '@angular/core';
import {GitsearchService} from '../service/gitsearch.service'
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import{ Repo } from '../repository';

@Component({
  moduleId: module.id,
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css'],
  providers:[GitsearchService], 
})

export class GitsearchComponent implements OnInit {
  user:User;
  repos:Repo;
  public username:string;
  repsArray:any[];

  constructor(private _gitsearch:GitsearchService ) {

  searchProfile(){
    this._gitsearch.updateProfile(this.username);
    this._gitsearch.profileRequest();
    this._gitsearch.repoRequest();
    this.reposArray = this._gitsearch.reposArray;
    });
   }

  ngOnInit() {
    this.gitProfile.profileRequest();
    this.profile = this.gitProfile.profile;

    this.gitProfile.repoRequest();
    this.reposArray = this.gitProfile.reposArray;
  }

}
