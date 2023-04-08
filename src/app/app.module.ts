import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LifestyleHookComponent } from './lifestyle-hook/lifestyle-hook.component';


@NgModule({
  declarations: [
    AppComponent,

    LifestyleHookComponent,
 
  ],
  imports: [
    BrowserModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
