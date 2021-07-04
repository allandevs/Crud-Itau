import { Injectable } from '@angular/core';
import { BaseService } from 'src/shared/base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from '../../../shared/global';
@Injectable({
  providedIn: 'root',
})
export class ClientService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }
  registerClient(obj: any) {
    return this.post(`savePerson`, obj);
  }

  getClients() {
    return this.get('getPerson');
  }

  getClientId(id: any) {
    return this.get(`getPerson/${id}`);
  }

  updateClient(obj: any) {
    return this.update(`editPerson`, obj);
  }

 
  deleteClient(id: any) {
    return this.delete(`deletePerson/${id}`);
  }

  getEnd(obj: any){
    return this.getPinCode(`${obj}/json`)
  }
  
}
