import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class Cart {

  cart = signal<Product[]>([

        {
      id: 1,
      title: 'Product 1',
      image: '/shirt1.png',
      price: 100,
      stock: 10
    },
    {
      id: 2,
      title: 'Product 2',
      image: '/shirt2.png',
      price: 200,
      stock: 5
    },



  ]);
  
  addToCart(product:Product){
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(productId: number) {
    this.cart.set(this.cart().filter(item => item.id !== productId));
  }
}
