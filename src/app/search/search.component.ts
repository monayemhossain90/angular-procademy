import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  // string interpolation
  title:string="This is angular.js";

  // property binding
    image:string = "../../assets/Angular2.png";
    
    // event binding
    searchValue:string="";
    changeSearchValue(eventData:Event){
        this.searchValue = (<HTMLInputElement>eventData.target).value;
    }
}
