import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { GitsearchService } from './service/gitsearch.service';
import { RoutingModule } from './routing/routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BoldedPipe } from './bolded.pipe';
import { HighlightDirective } from './highlight.directive';
import { IntroductionComponent } from './introduction/introduction.component';


@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent,
    IntroductionComponent,
    PageNotFoundComponent,
    BoldedPipe,
    HighlightDirective,
    IntroductionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RoutingModule  
  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }