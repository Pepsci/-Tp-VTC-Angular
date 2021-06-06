import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConducteurVehiculeComponent } from './list-conducteur-vehicule.component';

describe('ListConducteurVehiculeComponent', () => {
  let component: ListConducteurVehiculeComponent;
  let fixture: ComponentFixture<ListConducteurVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConducteurVehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConducteurVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
