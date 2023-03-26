import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  books=[
    {id:1,name:"C", author:"Yashavant Kanetkar"},    
    {id:2,name:"Python", author:"Robert Kiyosaki "},  
    {id:3,name:"C", author:"Cormen"},
 ]
}
