import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material/material.module';
import { environment } from 'src/environments/environment';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BASE_URL } from './tokens';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterLoginComponent } from './components/register-login/register-login.component';
import { SuccessDialogComponent } from './components/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './components/shared/dialogs/error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    MainContentComponent,
    CategoriesComponent,
    GetStartedComponent,
    FooterComponent,
    RegisterLoginComponent,
    SuccessDialogComponent,
    ErrorDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    { provide: 'BASE_URL', useValue: environment.apiRoot },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
