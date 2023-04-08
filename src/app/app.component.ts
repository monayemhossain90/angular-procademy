import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string ="procademy";
  inputText:string ="";

   onSubmit(inputEl:HTMLInputElement){
      this.inputText = inputEl.value;

  }
}
