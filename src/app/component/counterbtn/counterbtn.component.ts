import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  rename,
  resetCounter,
} from '../../master/store/counter.actions';
import { counterModel } from '../../master/store/counter.model';
import { AppStateModel } from '../../master/store/global/appstate.model';

@Component({
  selector: 'app-counterbtn',
  templateUrl: './counterbtn.component.html',
  styleUrl: './counterbtn.component.css',
})
export class CounterbtnComponent {
  constructor(private store: Store<AppStateModel>) {}

  onRename() {
    this.store.dispatch(rename({ channelname: 'Welcome to ngrx tutorial' }));
  }
  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onReset() {
    this.store.dispatch(resetCounter());
  }
}
