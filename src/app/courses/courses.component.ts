import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses=[
    {id:1,name:"C", author:"Yashavant Kanetkar",image:"../../assets/angular.jpg",price:"50$",type:"free"},    
    {id:2,name:"Python", author:"Robert Kiyosaki",image:"../../assets/express.jpg",price:"50$",type:"premium"},  
    {id:3,name:"C++", author:"Cormen",image:"../../assets/node.jpg",price:"50$",type:"premium"},
    {id:4,name:"Java", author:"Cormen",image:"../../assets/react.jpg",price:"50$",type:"free"},
    {id:5,name:"Rubi", author:"Cormen",image:"../../assets/react.jpg",price:"50$",type:"free"},
    {id:6,name:"javaScript", author:"Cormen",image:"../../assets/react.jpg",price:"50$",type:"pre"},
    {id:7,name:"Vue", author:"Cormen",image:"../../assets/react.jpg",price:"50$",type:"free"},
 ]

 getTotalCourse(){
  return this.courses.length;
 };

 getTotalFreeCourse(){
  return this.courses.filter((course)=>course.type==="free").length;
 };

 getTotalPremiumCourse(){
  return this.courses.filter((course)=>course.type==="premium").length;
 }

 courseCountRadioBtn:string = 'all';

 onFilterRadioBtnChange(data:string){
  this.courseCountRadioBtn = data;
  console.log(this.courseCountRadioBtn)

 }

}


