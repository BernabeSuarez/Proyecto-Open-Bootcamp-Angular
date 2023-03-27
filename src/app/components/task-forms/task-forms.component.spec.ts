import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAskFormsComponent } from './task-forms.component';

describe('TAskFormsComponent', () => {
  let component: TAskFormsComponent;
  let fixture: ComponentFixture<TAskFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TAskFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TAskFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
