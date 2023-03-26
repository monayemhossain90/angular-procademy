import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  books=[
    {id:1,name:"Let Us C", author:"Yashavant Kanetkar"},    
    {id:2,name:"Rich Dad Poor Dad", author:"Robert Kiyosaki "},  
    {id:3,name:"Introduction to Algorithms", author:"Cormen"},
 ]
}
