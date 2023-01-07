import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  { path: 'home', component: ItemListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
