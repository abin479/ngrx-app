import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../rxjs/counter.actions';

@Component({
  selector: 'app-card-right',
  templateUrl: './card-right.component.html',
  styleUrls: ['./card-right.component.scss']
})
export class CardRightComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  public increment(): void {
    this.store.dispatch(increment());
  }

  public decrement(): void {
    this.store.dispatch(decrement());
  }

  public reset(): void {
    this.store.dispatch(reset());
  }
}
