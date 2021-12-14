import { SendvalueService } from './../../_services/sendvalue.service';
import { AdmindataService } from './../../_services/admindata.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { createDomainModel } from 'src/app/_core/_models/create-domain-model.model';
import { Router } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-showdomainlist',
  templateUrl: './showdomainlist.component.html',
  styleUrls: ['./showdomainlist.component.scss']
})
export class ShowdomainlistComponent implements OnInit {
  selectedDomainName:any;
  data:any = [];
  buttons:any = [];
  setsetting:string = 'basic';
  showDomains:boolean=true;
  showForm:boolean=false;
  formTabs = ['basic','advance','category']
  constructor(private adminSvc:AdmindataService,private sendSvc:SendvalueService,private router:Router)  { }
   

  ngOnInit(): void {
     this.getDomain();
     this.bindData();
  }
  ///////////////////////////////////////////////////
  value: number = 0.0;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 0.0 },
      { value: 0.1 },
      { value: 0.2 },
      { value: 0.3 },
      { value: 0.4 },
      { value: 0.5 },
      { value: 0.6 },
      { value: 0.7 },
      { value: 0.8 },
      { value: 0.9 },
      { value: 1.0 }
    ]
  };

  //////////////////////////////////////////////////
  getDomain(){
     this.adminSvc.getDomainName().subscribe(a=>{
      this.data = a;
      this.sendSvc.setAlldomainData(this.data);
      });
  }

  onDomainClick(domain:string){
   this.router.navigate([`showdetails/${domain}`]);
   this.selectedDomainName = domain;
  }

  sendData(domain:any){
    this.sendSvc.setValue(domain);
  }

  bindData(){
    
  }

  showForms(){
    this.showForm = true;
  }
  hideForm(){
    this.showForm = false;
  }
  toggle(val:string){
      this.setsetting = val;
  }

  storeData(domainName,domainLabel,knowledgeBaseId,knowledgeBaseEndpointKey,confidenceThreshold,host,primaryEmailContact,
    secondaryEmailContact,helpText,maxResponsesInSearch){
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      this.showForm = false;
      let domainDetailsObj = {
        "domainName":domainName.value,
        "domainLabel":domainLabel.value,
        "knowledgeBaseId":knowledgeBaseId.value,
        "knowledgeBaseEndpointKey":knowledgeBaseEndpointKey.value,
        "confidenceThreshold":confidenceThreshold.value,
        "host":host.value,
        "primaryEmailContact":primaryEmailContact.value,
        "secondaryEmailContact":secondaryEmailContact.value,
        "helpText":helpText.value,
        "maxResponsesInSearch":maxResponsesInSearch.value
      }

    }



}
