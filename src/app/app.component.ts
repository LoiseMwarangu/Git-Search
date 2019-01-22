import { Component } from '@angular/core';
import {GitsearchComponent} from  './gitsearch/gitsearch.component'
import {GitsearchService} from './service/gitsearch.service';
import {HTTP_PROVIDERS} from '@angular/http';
@Component({
  moduleId: module.id,
 
  selector: 'app-root',
  templateUrl: './app.component.html',
  directives: [GitsearchComponent],
  providers: [GitsearchService],
  styleUrls: ['./app.component.css'],
  providers :[HTTP_PROVIDERS,GitsearchService]
})
export class AppComponent {
  title = 'Git-Hub-Search';
}