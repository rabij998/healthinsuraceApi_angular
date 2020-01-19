import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientDto } from '../classes/clientDto';
@Injectable()
export class HealthInsuranceApiService
{
  constructor(private httpclient: HttpClient) { }
  postClient(model: ClientDto): Observable<any> {
    return this.httpclient.post("http://localhost:8180/customer",model);
  }


}
