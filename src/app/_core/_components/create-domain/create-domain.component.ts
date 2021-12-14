import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { createDomainModel } from 'src/app/_core/_models/create-domain-model.model';
@Component({
  selector: 'app-create-domain',
  templateUrl: './create-domain.component.html',
  styleUrls: ['./create-domain.component.scss']
})
export class CreateDomainComponent implements OnInit {

  setsetting:string = 'basic';
  domainName:string;
  constructor() { }
  public addNewDomain:createDomainModel[] = [];
   
  ngOnInit(): void {
  }

  toggle(val:string){
      this.setsetting = val;
  }

  add_domain =new FormGroup({
    'id': new FormControl('_T12458'),
    'domain': new FormControl('WEB'),
    'knowledgeBaseId': new FormControl('A112'),
    'endpointKey': new FormControl('GHTYUK'),
    'host':new FormControl('KINGSHUK'),
    'maxresponses': new FormControl('3')
  });

  store(domain){
     //this.addNewDomain.push(domain.value,knowledgeBaseId.value,endpointKey.value,host.value,maxresponses.value);
     this.domainName = domain.value;
     console.warn(this.domainName);
  }



}
