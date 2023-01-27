import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesphotoComponent } from './servicesphoto.component';

describe('ServicesphotoComponent', () => {
  let component: ServicesphotoComponent;
  let fixture: ComponentFixture<ServicesphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesphotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
