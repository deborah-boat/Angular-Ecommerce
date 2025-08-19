import { Routes } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list';
import {  CartComponent } from './pages/cart/cart';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ProductsList
    },
    {
        path: 'cart',
        component: CartComponent // Assuming you have a CartComponent to handle the cart view

    }
];
