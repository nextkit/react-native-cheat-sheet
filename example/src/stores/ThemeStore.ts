import {observable, action} from 'mobx';

export interface IThemeStore {
  theme: string;
  setTheme: (newTheme: string) => void;
}

export class ThemeStore implements IThemeStore {
  @observable
  public theme: string = 'light';

  @action
  public setTheme(newTheme: string): void {
    this.theme = newTheme;
  }
}
