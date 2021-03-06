import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {reducers} from '../app/store/reducers';
import { storageSyncMetaReducer } from 'ngrx-store-persist';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    StoreModule.forRoot(reducers, { metaReducers: [storageSyncMetaReducer] }),
    ToastrModule.forRoot({closeButton: true, preventDuplicates: true, enableHtml: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
