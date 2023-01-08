import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDurationComponent } from './field-duration.component';

describe('FieldDurationComponent', () => {
  let component: FieldDurationComponent;
  let fixture: ComponentFixture<FieldDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldDurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
