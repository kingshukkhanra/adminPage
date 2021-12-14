import { ShowdomainlistComponent } from './_core/_conainers/showdomainlist/showdomainlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDomainComponent } from './_core/_components/create-domain/create-domain.component';
import { HomeComponent } from './_core/_conainers/home/home.component';

const routes: Routes = [
  {path : 'showdetails/:name' , loadChildren:()=> import('./add-domain/add-domain.module').then(m=>m.AddDomainModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
