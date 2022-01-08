import { Component } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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

  getTotalAmount(): string {
    let total = 0;

    for (let item of this.basket) {
      total += item.price * item.quantity;
    }

    return total.toFixed(2) + ' TL';
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
}

type Product = {
  id: number;
  name: string;
  imagePath: string;
  price: number;
  unit: string;
  quantity: number;
};
