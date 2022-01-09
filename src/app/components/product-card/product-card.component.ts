import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService, Product } from 'src/app/service/shop.service';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product! : Product;

  @Output()
  productAdded = new EventEmitter<Product>();

  basket! : Product[];



  constructor(private shopService:ShopService) { }

  ngOnInit() : void{
    this.basket = this.shopService.basket;

  }




  addAmountBasket(product: Product): void {


    product.quantity++;

    this.addIfNotInBasket(product);

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

  addIfNotInBasket(product : Product) : void{
    if (!this.basket.includes(product) && product.quantity > 0) {
      this.basket.push(product);

      this.productAdded.emit(product);
    }
  }



}
