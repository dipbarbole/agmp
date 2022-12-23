import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should console log text from search field while search button clicked', () => {
    spyOn(console, 'log');
    component.searchAction();
    expect(console.log).toHaveBeenCalled();
  });

  it('should console log the course id while deleting', () => {
    spyOn(console, 'log');
    component.deleteCourseById(1);
    expect(console.log).toHaveBeenCalled();
  });
});
