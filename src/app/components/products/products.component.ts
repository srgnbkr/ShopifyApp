import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';
import { Order, Product, ShopService } from 'src/app/service/shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private shopService:ShopService) { }


  ngOnInit() : void{
    this.basket = this.shopService.basket;
  }


  title = 'ShopifyApp';
  products = products;
  basket!: Product[];



  getTotalQuantity(): string {
    let total = 0;

    for (let item of this.basket) {
      total += item.quantity;
    }
    return total + ' Adet';
  }

  getTotalAmount(): number {
    let total = 0;

    for (let item of this.basket) {
      total += item.price * item.quantity;
    }

    return total;
  }



  createOrder() : void{
    let order : Order = {
      count : this.basket.length,
      cost  : this.getTotalAmount()
    }

    this.shopService.orders.push(order);

    for(let item of this.basket){
      item.quantity = 0 ;

    }
    this.basket.length = 0;



  }



}

