import { UserEntity } from '../interfaces/user-entity.model';
import { Course } from '../coursesPageModule/interfaces/course.model';

export const USER_DATA: UserEntity = {
  id: 1,
  firstName: 'Rahul',
  lastName: 'Patil',
};

export const COURSES_LIST: Course[] = [
  {
    id: 1,
    title: 'Java',
    creationDate: new Date(),
    duration: 59,
    description:
      'Information technology or IT courses involve the study of computers and networks to process, clean, store and secure business information or any type of information meant for professional purposes. Information Technology is a course that focuses on the regulation and security of data using electronic devices and software.',
  },
  {
    id: 2,
    title: 'Angular',
    creationDate: new Date(),
    duration: 19,
    description:
      'Information technology or IT courses involve the study of computers and networks to process, clean, store and secure business information or any type of information meant for professional purposes. Information Technology is a course that focuses on the regulation and security of data using electronic devices and software.',
  },
  {
    id: 3,
    title: 'React',
    creationDate: new Date(),
    duration: 60,
    description:
      'Information technology or IT courses involve the study of computers and networks to process, clean, store and secure business information or any type of information meant for professional purposes. Information Technology is a course that focuses on the regulation and security of data using electronic devices and software.',
  },
  {
    id: 4,
    title: 'Javascript',
    creationDate: new Date(),
    duration: 42,
    description:
      'Information technology or IT courses involve the study of computers and networks to process, clean, store and secure business information or any type of information meant for professional purposes. Information Technology is a course that focuses on the regulation and security of data using electronic devices and software.',
  },
  {
    id: 5,
    title: 'Node',
    creationDate: new Date(),
    duration: 26,
    description:
      'Information technology or IT courses involve the study of computers and networks to process, clean, store and secure business information or any type of information meant for professional purposes. Information Technology is a course that focuses on the regulation and security of data using electronic devices and software.',
  },
];
