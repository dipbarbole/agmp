import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAuthersComponent } from './field-authers.component';

describe('FieldAuthersComponent', () => {
  let component: FieldAuthersComponent;
  let fixture: ComponentFixture<FieldAuthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldAuthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldAuthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
