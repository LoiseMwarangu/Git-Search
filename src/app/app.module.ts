import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HubService } from './service/service.component';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { BoldenPipe } from './bolden.pipe';
// import { HubComponent } from './git-search/git-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BoldenPipe,
    // HubComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HubService],
  bootstrap: [AppComponent]
})
export class AppModule { }