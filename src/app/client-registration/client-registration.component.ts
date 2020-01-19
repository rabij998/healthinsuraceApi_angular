import { Component, OnInit } from '@angular/core';

import { HealthInsuranceApiService } from '../services/healthinsuraceApi.service';
import { ClientDto } from '../classes/clientdto';
@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent implements OnInit {
   model = new ClientDto("", "", "", "");

  constructor(private healthInsuranceApi: HealthInsuranceApiService) {
     
   
  }
  eraseData() {
    this.model.fName = "";
    this.model.lName = "";
    this.model.email = "";
    this.model.phone = "";
  }
  onClick() {
    /*Just testing two way data binding in object*/
    console.log(this.model.fName);
    console.log(this.model.email);
    
    this.healthInsuranceApi.postClient(this.model)
      .subscribe
      (
      )
    this.eraseData();
  }

  ngOnInit() {
    
   
   
  }

}
