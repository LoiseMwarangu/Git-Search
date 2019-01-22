import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { GitsearchComponent } from '../gitsearch/gitsearch.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes:Routes = [
  {path:"gitsearch",component:GitsearchComponent},
  {path:"intro",component:IntroductionComponent},
  {path:"",redirectTo:"/intro",pathMatch:"full"},
  {path:"**",component:PageNotFoundComponent}
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