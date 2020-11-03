import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class SharedService {
  public notifyUserProfile$: any = new Subject<any>();
  public notifySpinner$: any = new Subject<any>();

  constructor() {}

  public notifyUserProfile(obj: any): void {
    this.notifyUserProfile$.next(obj);
  }
  public notifySpinner(obj: any): void {
    this.notifySpinner$.next(obj);
  }
}
