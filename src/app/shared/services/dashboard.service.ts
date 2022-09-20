import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getUserById } from '../querry/dashboard.querry';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class DashbooardService {
  app = 'afya';
  auth = 'authentication';
  item = 'item-configuration';
  private searchable$: Observable<any>;
  token: string;
  user: any;
  principal: any;
  facility_code: any;

  constructor(private apollo: Apollo, private storeSvc: StorageService) {
    this.token = localStorage.getItem('currentClient');
  }

  userById(payload: string) {
    return this.apollo.watchQuery<any>({
      query: getUserById,
      fetchPolicy: 'no-cache',
      variables: {
        userId: payload,
      },
    }).valueChanges;
  }
}
