import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { GetStartedComponent } from './components/get-started/get-started.component';

const routes: Routes = [
  {path: '', component: GetStartedComponent},
  {path: 'form', component: FormComponent},
  {path: '**', component: GetStartedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
