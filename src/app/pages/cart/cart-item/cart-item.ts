import { Component,inject } from '@angular/core';
import { Product } from '../../../models/products.model';
import { input } from '@angular/core';
import { ButtonComponent } from "../../../components/button/button";
import { Cart } from '../../../services/cart';


@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex  gap-4 item-center">
      <img [src]="item().image" class="w-[300px] h-[150px] object-contain"/>
      <div class="flex flex-col">
        <span class="text-md font-bold">{{item().title}}</span>
        <span class="text-sm">{{'$'+ item().price}}</span>
      </div>
      <div class="flex-1">
        <app-button label="Remove" (btnClicked)="cart.removeFromCart(item().id)"/>


      </div>
      
      
</div>
  `,
  styles: ``
})
export class CartItem {
  cart = inject(Cart);
  item = input.required<Product>()

}
