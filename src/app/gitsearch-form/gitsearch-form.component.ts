import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Gitsearch} from '../git-search';

@Component({
  selector: 'app-gitsearch-form',
  templateUrl: './gitsearch-form.component.html',
  styleUrls: ['./gitsearch-form.component.css']
})
export class GitsearchFormComponent implements OnInit {
    @Output() addGitsearch = new EventEmitter< Gitsearch>();
    submitGitsearch(){
      input.onchange = goSearch;
     searchurl= somebaseurl + keyword; 
      var xhr = new XMLHttpRequest();
      xhr.open("GET", searchurl,true);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onload= function(){
          var list = JSON.parse(xhr.responseText);
          showResult(Gitsearch);
      }   
      xhr.send(null);                         
  ngOnInit() {};

}
});

