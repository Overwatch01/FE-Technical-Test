import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from '../app/store/states/app.state';
import { UserModel } from './shared/models/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'FE-Technical';
  users: any = [];

  constructor(private _store: Store<UserState>) {
  }

  ngOnInit() {
    this._store.select('user').subscribe(res =>  {
      this.users = res;
    });

  }
}
