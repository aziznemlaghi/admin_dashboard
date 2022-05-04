import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Service} from '../models/service.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) {}


  public getServices() {
    return this.http.get<any>('http://localhost:3000/service/findServices');
  }

  public getService(id) {
    return this.http.get('http://localhost:3000/service/findService/' + id);
  }

  public deleteService(service) {
    return this.http.delete('http://localhost:3000/service/delete/' + service._id);
  }

  public createService(service) {
    return this.http.post<Service>('http://localhost:3000/service/addService', service);
  }

  public updateService(service) {
    return this.http.patch<Service>('http://localhost:3000/service/updateService/' + service._id, service);
  }

}
