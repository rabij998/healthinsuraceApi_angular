import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { HealthProductsComponent } from './health-products/health-products.component';
import { PurchasePolicyComponent } from './purchase-policy/purchase-policy.component';
import { HttpClientModule } from '@angular/common/http';
import { HealthInsuranceApiService } from './services/healthinsuraceApi.service';


@NgModule({
  declarations: [
    AppComponent,
    ClientRegistrationComponent,
    HealthProductsComponent,
    PurchasePolicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HealthInsuranceApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
