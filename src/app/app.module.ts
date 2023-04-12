import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './customDirective/highlight.directive';
import { HoverDirective } from './customDirective/hover.directive';
import { BetterHighlightDirectiveDirective } from './better-highlight-directive.directive';






@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HoverDirective,
    BetterHighlightDirectiveDirective,
   
   
  ],
  imports: [
    BrowserModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
