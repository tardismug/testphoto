import { Injectable } from '@angular/core';
import { Servicephoto } from './data-servicesphoto-set';
import { SERVICEPHOTO } from './data-servicesphoto-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesphotoService {
  constructor() {}

  getServicesphoto(): Observable<Servicephoto[]> {
    const Servicesphoto = of(SERVICEPHOTO);
    return Servicesphoto;
  }
}
