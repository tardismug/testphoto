import { Component } from '@angular/core';
import { Servicephoto } from '../data-servicesphoto-set';
import { ServicesphotoService } from '../servicesphoto.service';

@Component({
  selector: 'app-servicesphoto',
  templateUrl: './servicesphoto.component.html',
  styleUrls: ['./servicesphoto.component.scss'],
})
export class ServicesphotoComponent {
  servicesphoto: Servicephoto[] = [];

  constructor(private servicephotoservice: ServicesphotoService) {}

  ngOnInit(): void {
    this.getServicesphoto();
  }

  getServicesphoto(): void {
    this.servicephotoservice
      .getServicesphoto()
      .subscribe((servicesphoto) => (this.servicesphoto = servicesphoto));
  }
}
