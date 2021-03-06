import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1 = {
    productID: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitPrice: 5,
  };
  product2 = {
    productID: 2,
    productName: 'Laptop',
    categoryId: 1,
    unitPrice: 5,
  };
  product3 = {
    productID: 3,
    productName: 'Mouse',
    categoryId: 1,
    unitPrice: 5,
  };
  product4 = {
    productID: 4,
    productName: 'Keyboard',
    categoryId: 1,
    unitPrice: 5,
  };
  product5 = {
    productID: 5,
    productName: 'Camera',
    categoryId: 1,
    unitPrice: 5,
  };

  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5
  ];
  constructor() { }

  ngOnInit(): void {
  }


}
