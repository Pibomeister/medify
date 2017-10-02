import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { WelcomeComponent } from './containers/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './containers/main/main.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import {
   MdToolbarModule,
   MdButtonModule,
   MdIconModule,
   MatMenuModule,
   MdListModule,
   MatSidenavModule,
   MatCardModule,
   MatInputModule
   } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdToolbarModule,
    MatMenuModule,
    MdListModule,
    MatSidenavModule,
    MdIconModule,
    MatCardModule,
    MatInputModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    HeaderComponent,
    MainComponent,
    PageNotFoundComponent
  ],
  exports: [
    FlexLayoutModule,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    MainComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule ) {
    if (parentModule) {
      throw new Error ('Error, core module already exists.');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [AuthService]
    };
  }
}
