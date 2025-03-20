import { Component } from '@angular/core';


@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
    // tạo biến title có kiểu chuỗi
    // gan gia trị mặc định tên trường
    title: string = 'FPT Polytechnic';
    img: string = 'cat.jpg';
    clickMe(){
      alert("Polytechnic");
  
    }
  }

