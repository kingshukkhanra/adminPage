import { createDomainModel } from 'src/app/_core/_models/create-domain-model.model';
import { AdmindataService } from './../../_core/_services/admindata.service';
import { SendvalueService } from './../../_core/_services/sendvalue.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/_core/_services/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  domainName:string;
  setsetting:string = 'basic';
  domainDetails:any;
  newDomainDetails:any;
  userForm:FormGroup;
  constructor(private actRoute:ActivatedRoute,private sendSvc:SendvalueService,private adminSvc:AdmindataService) {  }


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

  toggle(val:string){
    this.setsetting = val;
  }

  ngOnInit(): void {
    this.actRoute.params.subscribe(a=>{
      this.domainName = a.name;
      this.getDomainDetailsByName(this.domainName);
    });    
  }

  getDomainDetailsByName(selectedDomain){
    this.adminSvc.getSelectedDomainDetails(selectedDomain).subscribe(a=>{
      this.newDomainDetails = a;
      this.domainDetails = this.newDomainDetails;

      this.userForm = new FormGroup({
        domainName : new FormControl(this.domainDetails[0].domainName,Validators.required),
        domainLabel : new FormControl(this.domainDetails[0].domainLabel,Validators.required),
        knowledgebaseId : new FormControl(this.domainDetails[0].knowledgeBaseId,Validators.required),
        knowledgeBaseEndpointKey : new FormControl(this.domainDetails[0].knowledgeBaseEndpointKey,Validators.required),
        host : new FormControl(this.domainDetails[0].host,Validators.required),
        primaryEmailContact : new FormControl(this.domainDetails[0].primaryEmailContact,Validators.required),
        secondaryEmailContact : new FormControl(this.domainDetails[0].secondaryEmailContact,Validators.required),
        helpText : new FormControl(this.domainDetails[0].helpText,Validators.required),
        maxResponsesInSearch : new FormControl(this.domainDetails[0].maxResponsesInSearch,Validators.required),
        lookbackTimeForLog : new FormControl(this.domainDetails[0].lookbackTimeForLog,Validators.required)
      });
    });
  }

  updateData(domainLabel,knowledgeBaseId,knowledgeBaseEndpointKey,confidenceThreshold,host,primaryEmailContact,
             secondaryEmailContact,helpText,maxResponsesInSearch,lookbackTimeForLog){
   
    let updateDetails = {
        "domainName": this.domainName,
        "domainLabel":domainLabel.value,
        "knowledgeBaseId":knowledgeBaseId.value,
        "knowledgeBaseEndpointKey":knowledgeBaseEndpointKey.value,
        "confidenceThreshold":confidenceThreshold.value,
        "host":host.value,
        "primaryEmailContact":primaryEmailContact.value,
        "secondaryEmailContact":secondaryEmailContact.value,
        "helpText":helpText.value,
        "maxResponsesInSearch":maxResponsesInSearch.value,
        "lookbackTimeForLog":lookbackTimeForLog.value
    };
    this.adminSvc.updateSelectedDomainDetails(this.domainName,updateDetails).subscribe(data=>{
      console.log(data);
    });
    Swal.fire({
      text:'Sucessfully Updated',
      icon:'success'
    });
  }


}
