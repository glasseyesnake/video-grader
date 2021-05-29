import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideosComponent } from './components/videos/videos.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    SearchFieldComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
