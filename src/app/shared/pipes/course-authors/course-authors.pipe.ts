import { Pipe, PipeTransform } from '@angular/core';
import { CourseAuthor } from 'src/app/coursesPageModule/interfaces/course.model';

@Pipe({
  name: 'courseAuthors'
})
export class CourseAuthorsPipe implements PipeTransform {
  transform(courseAuthors: CourseAuthor[]): string {
    const authors = courseAuthors.map(
      author => `${author.name}`
    );
    return authors.join(', ');
  }
}
