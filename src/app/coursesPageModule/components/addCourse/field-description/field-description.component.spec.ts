import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDescriptionComponent } from './field-description.component';

describe('FieldDescriptionComponent', () => {
  let component: FieldDescriptionComponent;
  let fixture: ComponentFixture<FieldDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
