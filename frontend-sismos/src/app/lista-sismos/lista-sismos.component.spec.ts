import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSismosComponent } from './lista-sismos.component';

describe('ListaSismosComponent', () => {
  let component: ListaSismosComponent;
  let fixture: ComponentFixture<ListaSismosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSismosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSismosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
