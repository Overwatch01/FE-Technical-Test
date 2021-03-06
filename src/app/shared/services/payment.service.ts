import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserModel} from '../models/user-model';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  processPayment(model: UserModel): Observable<any>  {
    return this.httpClient.post(env.testUrl, model);
  }
}
