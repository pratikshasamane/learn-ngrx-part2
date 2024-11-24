import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterModel } from '../../master/store/counter.model';
import { getCounter } from '../../master/store/counter.selector';
import { AppStateModel } from '../../master/store/global/appstate.model';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css',
})
export class CounterdisplayComponent {
  constructor(private store: Store<AppStateModel>) {}
  counterDisplay!: number;
  channelname = '';
  ngOnInit() {
    this.store.select(getCounter).subscribe((data) => {
      this.counterDisplay = data;
      console.log('in counter display file');
    });
  }
}
