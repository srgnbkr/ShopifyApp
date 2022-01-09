import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  orders: Order[] = [];
  basket : Product[] = [];

  constructor() {}
}

export type Order = {
  count: number;
  cost: number;
};

export type Product = {
  id: number;
  name: string;
  imagePath: string;
  price: number;
  unit: string;
  quantity: number;
  info:string;
  related : number[];

};


