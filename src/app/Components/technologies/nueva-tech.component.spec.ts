import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTechComponent } from './nueva-tech.component';

describe('NuevaTechComponent', () => {
  let component: NuevaTechComponent;
  let fixture: ComponentFixture<NuevaTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
