import { Component } from '@angular/core';
import {GitsearchComponent} from  './gitsearch/gitsearch.component'
import {GitsearchService} from './service/gitsearch.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  directives: [GitsearchComponent],
  styleUrls: ['./app.component.css'],
  providers :[HttpClient,GitsearchService]
})
export class AppComponent {
  title = 'Git-Hub-Search';
}