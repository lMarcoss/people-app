import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {breadcrumb: 'LOGIN'},
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ]
})
export class LoginRoutingModule {

}
