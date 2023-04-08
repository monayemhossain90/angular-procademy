import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifestyle-hook',
  templateUrl: './lifestyle-hook.component.html',
  styleUrls: ['./lifestyle-hook.component.css']
})
export class LifestyleHookComponent {
  @Input() value:string = "procademy";
  constructor(){
    console.log("constructor called");

  }

  ngOnChanges(change:any){
    console.log("ngChanges called")

  }

  ngOnInit(){
    console.log("ngInit called")
  };

  ngDoCheck(){
    console.log("ngDoCheck called")
  }
}
