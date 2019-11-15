import {observable, action, computed} from 'mobx';

export interface ICounterStore {
  count: number;
  doubleCount: number;
  increment: () => void;
  decrement: () => void;
}

export class CounterStore implements ICounterStore {
  @observable
  public count: number = 0;

  @computed
  public get doubleCount() {
    return this.count * 2;
  }

  @action
  public increment() {
    this.count++;
  }

  @action
  public decrement() {
    this.count--;
  }
}
