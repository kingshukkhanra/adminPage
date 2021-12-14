import { createDomainModel } from 'src/app/_core/_models/create-domain-model.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdmindataService {

  adminUrl:string = environment.baseUrl;
  deleteDomainUrl:string = environment.deleteConfigbyDomainUrl;
  domainDetailsUrl:string =environment.getConfigByDomainUrl;
  saveDomainUrl:string = environment.saveConfigbyDomainUrl;
  createDomainUrl:string = environment.createDomainUrl;
  constructor(private apiSvc: ApiService ,private http:HttpClient) { }

getDomainName(){
     let path:string = this.adminUrl + '/api/getAllConfig?code=VSMrZUYRrKD7nhtT45wivWcZLmJfSr9YMO635hULPqY1qyYdChbKng==';
     return this.apiSvc.get(path);
  }

getSelectedDomainDetails(domainName) {
   let path = this.domainDetailsUrl + '?code=HuoxeVo3vxQzWtzMesaWqywDJ8aVbJCF0atx0a4nI9XlMFDaTdVNOA==&domainName=' + domainName;
   return this.apiSvc.get(path);
}

updateSelectedDomainDetails(domainName:string,updateDomainDetails:any){
  let headers = {'responseType':'text'};
  let path = this.saveDomainUrl+'?code=VSMrZUYRrKD7nhtT45wivWcZLmJfSr9YMO635hULPqY1qyYdChbKng==';
  // +domainName
  return this.apiSvc.post(path,updateDomainDetails,headers);
}

createNewDomain(){

}

}
