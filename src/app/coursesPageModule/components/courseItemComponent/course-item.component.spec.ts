import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { COURSES_LIST } from 'src/app/constants/constant';
import { Course } from '../../interfaces/course.model';

import { CourseItemComponent } from './course-item.component';

const course: Course = COURSES_LIST[0];

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain(
      component.course.title
    );
  });

  it('should call method deleteCourse when course delete button is clicked', fakeAsync(() => {
    const spyOnDelete = spyOn(component, 'deleteCourse');
    let button = fixture.debugElement.query(By.css('.delete-btn'));
    button.triggerEventHandler('click', null);
    expect(spyOnDelete).toHaveBeenCalled();
  }));
});
