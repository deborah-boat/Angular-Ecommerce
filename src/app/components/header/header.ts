import { Component, inject, signal } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";
import { Cart } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton,RouterLink],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <button class="text-xl" routerLink="/">My Store</button>
      <app-primary-button [label]="'Cart ('+ cart.cart().length +')'" (btnClicked)="showButtonClicked()"
            routerLink="/cart" 
/>
     
</div>
  `,
  styles: `
  
  `
})
export class Header {
  cart = inject(Cart);

  showButtonClicked() {
    
    // You can now use this.cart to access the Cart service
    // Additional logic can be added here, such as navigating to the cart page or updating a cart service
 }
  
  

}
