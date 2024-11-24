import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementCustom } from '../../master/store/counter.actions';
import { counterModel } from '../../master/store/counter.model';
import { getchannelName } from '../../master/store/counter.selector';
import { AppStateModel } from '../../master/store/global/appstate.model';
@Component({
  selector: 'app-customincrement',
  templateUrl: './customincrement.component.html',
  styleUrl: './customincrement.component.css',
})
export class CustomincrementComponent {
  constructor(private store: Store<AppStateModel>) {}

  counterInput!: number;
  actionType = 'add';
  channelname = '';

  ngOnInit() {
    this.store.select(getchannelName).subscribe((data) => {
      this.channelname = data;
      console.log('in custom counter file');
    });
  }
  onIncrement() {
    this.store.dispatch(
      IncrementCustom({
        value: +this.counterInput,
        actionType: this.actionType,
      })
    );
  }
}
