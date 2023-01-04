import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
interface AppState {
  message: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  query!: string;
  constructor(private store: Store<AppState>) {}
  changeState() {
    this.store.dispatch({ type: 'FILTER' });
  }
}
