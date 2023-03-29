import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent {

enterSearchValue:string = '';

  @Output()
  searchTextChange:EventEmitter<string> = new EventEmitter<string>();
  
  onSearchTextChange(){
    this.searchTextChange.emit(this.enterSearchValue)
  }

}
