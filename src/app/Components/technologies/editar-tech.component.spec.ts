import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTechComponent } from './editar-tech.component';

describe('EditarTechComponent', () => {
  let component: EditarTechComponent;
  let fixture: ComponentFixture<EditarTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
