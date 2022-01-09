import { Component, OnInit } from '@angular/core';
import { Order, ShopService } from './../../service/shop.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders : Order[] = [];


  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.listOrders();

  }

  listOrders(){
    this.orders = this.shopService.orders;
  }
}


