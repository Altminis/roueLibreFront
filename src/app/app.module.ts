import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyAccountComponent } from './my-account/my-account.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ModificationComponent } from './modification/modification.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {MatSelectModule} from '@angular/material/select';
import { ListeAnnoncesComponent } from './liste-annonces/liste-annonces.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    HeaderComponent,
    FooterComponent,

    MyAccountComponent,

    TestComponent,
    HomeComponent,
    ErrorComponent,
    SubscriptionComponent,
    SubscriptionComponent,
    ModificationComponent,
    ContactUsComponent,
    ListeAnnoncesComponent,
    VehiculesComponent,
    VehiculeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
