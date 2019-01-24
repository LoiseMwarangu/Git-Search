import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { GitsearchComponent } from '../gitsearch/gitsearch.component';
import { IntroductionComponent } from '../introduction/introduction.component';

const routes:Routes = [
  {path:"gitsearch",component:GitsearchComponent},
  {path:"introduction",component:IntroductionComponent},
  {path:"",redirectTo:"/introduction",pathMatch:"full"},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule {} 