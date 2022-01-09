import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';
import { Order, ShopService } from 'src/app/service/shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private shopService:ShopService) { }



  title = 'ShopifyApp';
  products = products;
  basket: Product[] = [];

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

  addAmountBasket(product: Product): void {
    if (!this.basket.includes(product)) {
      this.basket.push(product);
    }

    product.quantity++;
  }

  deleteAmountBasket(product: Product): void {
    if (product.quantity == 0) {
      return;
    }
    product.quantity--;

    //0 Olursa sepetten çıkar

    if(product.quantity == 0){
      let index = this.basket.indexOf(product);
      this.basket.splice(index,1);
    }
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
    this.basket = [];



  }

}

type Product = {
  id: number;
  name: string;
  imagePath: string;
  price: number;
  unit: string;
  quantity: number;
};
