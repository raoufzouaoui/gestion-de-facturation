import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FactureAdminComponent } from './facture-admin/facture-admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaypalComponent } from './paypal/paypal.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'facture',component:FactureAdminComponent},
  {path:'home',component:HomeComponent},
  {path:'paypal',component:PaypalComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
