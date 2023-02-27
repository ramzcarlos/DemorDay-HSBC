import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSismosComponent } from './registrar-sismos.component';

describe('RegistrarSismosComponent', () => {
  let component: RegistrarSismosComponent;
  let fixture: ComponentFixture<RegistrarSismosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarSismosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarSismosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
