import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../../shared/services/payment.service';
import { NotificationService } from '../../shared/services/notification.service';
import { UserModel } from '../../shared/models/user-model';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserState } from '../../../app/store/states/app.state';
import * as UserActions from '../../../app/store/actions/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  public formGroup: FormGroup;
  userModel: UserModel;

  static formControl = () => {
    return {
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      budget: ['', [Validators.required]],
    };
  }

  constructor(
    private _formBuilder: FormBuilder, private _paymentService: PaymentService, 
    private _store: Store<UserState>, private _notificationService: NotificationService,
    private _spinner: NgxSpinnerService, private _router: Router) { 
    this.formGroup = _formBuilder.group(FormComponent.formControl());
    }

  ngOnInit(): void {
  }

  processAction() {
    this._spinner.show();
    this.userModel = this.formGroup.value;
    this._paymentService.processPayment(this.userModel).subscribe((res) => {
      this._store.dispatch(new UserActions.ProfileUser(this.userModel));
      this._notificationService.showSuccess("Created Successfully", "Success")
      this._router.navigate(['./']);
      this._spinner.hide();
    }, (err) => {
      this._notificationService.showError("Couldn't complete transaction try again!", "Failed")
      this._spinner.hide();
    })
  }
}
