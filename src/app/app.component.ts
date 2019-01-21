import { Component } from '@angular/core';
import {GitsearchComponent} from  './gitsearch/gitsearch.component'
import {GitsearchService} from './service/gitsearch.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  directives: [GitsearchComponent],
  providers: [GitsearchService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Git-Hub-Search';
}