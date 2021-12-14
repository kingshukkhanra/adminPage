import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_core/_components/header/header.component';
import { FooterComponent } from './_core/_components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowdomainlistComponent } from './_core/_conainers/showdomainlist/showdomainlist.component';
import { HomeComponent } from './_core/_conainers/home/home.component';
import { CreateDomainComponent } from './_core/_components/create-domain/create-domain.component';
import { ApiService } from './_core/_services/api.service';
import { AdmindataService } from './_core/_services/admindata.service';
import { SendvalueService } from './_core/_services/sendvalue.service';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowdomainlistComponent,
    HomeComponent,
    CreateDomainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSliderModule,
    ReactiveFormsModule
  ],
  providers: [ApiService,AdmindataService,SendvalueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
