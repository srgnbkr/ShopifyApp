import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/service/shop.service';
import { products } from './../../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productId!: string;
  product?: Product;

  releatedProducts: Product[] = [];
  productAdded? : Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = this.route.snapshot.paramMap.get('productId') as string;
      this.product = products.find((p) => p.id == Number(this.productId));

      this.releatedProducts = products.filter((p) =>
        this.product?.related.includes(p.id)
      );

    });
  }

  showMessage(product : Product) : void{
    this.productAdded = product;

    setTimeout(() =>this.productAdded = undefined,3000 );

  }
}


