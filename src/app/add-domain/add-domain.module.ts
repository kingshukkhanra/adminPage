import { ShowDetailsComponent } from './show-details/show-details.component';
import { Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ApiService } from '../_core/_services/api.service';
import { AdmindataService } from '../_core/_services/admindata.service';
import { HttpClientModule } from '@angular/common/http';
const Routes: Routes = [
  {path : '',component :ShowDetailsComponent ,pathMatch: 'full'}
];

@NgModule({
  declarations: [ 
   ShowDetailsComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSliderModule,
    RouterModule.forChild(Routes),
    HttpClientModule
  ]
})
export class AddDomainModule { 
  constructor(){
    console.log('addDomain Component loaded');
  }
}
