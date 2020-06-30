import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {Auth0Component} from './auth0/auth0.component';
import {SigninRedirectCallbackComponent} from './auth0/signin-redirect-callback/signin-redirect-callback.component';
import {SignoutRedirectCallbackComponent} from './auth0/signout-redirect-callback/signout-redirect-callback.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [Auth0Component, SigninRedirectCallbackComponent, SignoutRedirectCallbackComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'signin-callback', component: SigninRedirectCallbackComponent},
      {path: 'signout-callback', component: SignoutRedirectCallbackComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]),
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    MatButtonModule,
  ]
})
export class AuthenticationModule {
  // constructor(library: FaIconLibrary) {
  //   library.addIconPacks(fas);
  //   library.addIcons( faKey, faAt, faCheck, faSignInAlt, faSignOutAlt);
  //   library.addIcons(faGithub);
  //   library.addIcons(faUser);
  // }
}
