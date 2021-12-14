import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendvalueService {

  domain:any = [];
  allDomains:any = [];
  constructor() { }
 
  setAlldomainData(allDomainData){
     this.allDomains = allDomainData;
  }
  
  setValue(domain){
     this.domain = domain;
  }
  getValue(){
    return this.domain;
  }

}
