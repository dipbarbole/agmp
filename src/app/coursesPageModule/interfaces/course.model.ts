export interface Course {
  id: number;
  title?: string;
  topRated?: boolean;
  creationDate?: Date;
  duration?: number;
  name: string;
  length: number;
  description: string;
  date?: any;
  authors?: CourseAuthor[];
  isTopRated?: boolean;
}

export interface CourseAuthor {
  id: number;
  name: string;
}

