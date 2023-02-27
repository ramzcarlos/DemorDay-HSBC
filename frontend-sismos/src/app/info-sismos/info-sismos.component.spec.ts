import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSismosComponent } from './info-sismos.component';

describe('InfoSismosComponent', () => {
  let component: InfoSismosComponent;
  let fixture: ComponentFixture<InfoSismosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSismosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSismosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
