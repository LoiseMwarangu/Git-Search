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
  

  constructor(private gitsearchservice:GitsearchService ) { }

  searchProfile(){
    this.gitsearchservice.updateProfile(this.username);
    this.gitsearchservice.searchProfile();
    this.gitsearchservice.repoRequest();
    this.reposArray = this.gitsearchservice.reposArray;
     }
  ngOnInit() {
    this.gitsearchservice.updateProfile;
    this.user = this.gitsearchservice.user;

    this.gitsearchservice.repoRequest();
    this.reposArray = this.gitsearchservice.reposArray;
  }

}
