import { Component } from '@angular/core';
import { Product } from '../../models/products.model';
import { signal } from '@angular/core';
import { ProductCard } from "./product-card/product-card";
@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
     @for(product of products(); track product.id){
      <app-product-card [product]="product"/>
       
      }

</div>
  `,
  styles: ``
})
export class ProductsList {
  products = signal<Product[]>([
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
    {
      id: 3,
      title: 'Product 3',
      image: '/shirt3.png',
      price: 300
    },
        {
      id: 3,
      title: 'Product 4',
      image: '/shirt1.png',
      price: 300
    },
   

  ]);

}



