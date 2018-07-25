import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignupSocialComponent } from './signup-social/signup-social.component';
import { SocialLoginModule, AuthServiceConfig } from '../../node_modules/angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from '../../node_modules/angularx-social-login';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    // ----------------------------------------------goggle client auth id goes here
    provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    //  ------------------------- facebook App ID goes here
    provider: new FacebookLoginProvider('228309951150208')
  }
  // {
  //   id: LinkedInLoginProvider.PROVIDER_ID,
  //   //  ------------------------- linkedin client ID goes here
  //   provider: new LinkedInLoginProvider('LinkedIn-client-Id', false, 'en_US')
  // }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SignupSocialComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
