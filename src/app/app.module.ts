import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationModule} from './authentication/authentication.module';
import {RouterModule} from '@angular/router';
import {SmartShareModule} from './smart-share/smart-share.module';
import {CustomisedComponentsModule} from './customised-components/customised-components.module';
import {FaIconComponent, FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    AuthenticationModule,
    SmartShareModule,
    CustomisedComponentsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FaIconComponent]
})
export class AppModule { }
