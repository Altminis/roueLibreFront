import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ModificationComponent } from './modification/modification.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatSelectModule } from '@angular/material/select';
import { ListeAnnoncesComponent } from './liste-annonces/liste-annonces.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';

import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { AnnonceComponent } from './liste-annonces/annonce/annonce.component';
import { CreerAnnonceComponent } from './creer-annonce/creer-annonce.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AnnoncePopupComponent } from './annonce-popup/annonce-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { VehiculeComponent } from './vehicules/vehicule/vehicule.component';
import { ListMesLocationsComponent } from './my-account/list-mes-locations/list-mes-locations.component';



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
    VehiculeComponent,
    AnnonceComponent,
    AddVehiculeComponent,
    CreerAnnonceComponent,
    AnnoncePopupComponent,
    ListMesLocationsComponent

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
    MatTableModule,
    MatListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [AnnoncePopupComponent]
})
export class AppModule { }
