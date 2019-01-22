import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { GitsearchService } from './service/gitsearch.service';
import { IntroComponent } from './intro/intro.component';
import { RoutingModule } from './routing/routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BoldedPipe } from './bolded.pipe';
import { HighlightDirective } from './highlight.directive';
import { environment } from './environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent,
    IntroComponent,
    PageNotFoundComponent,
    BoldedPipe,
    HighlightDirective,
    environment
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