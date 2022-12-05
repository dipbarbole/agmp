export interface Course {
    id: number;
    title: string;
    topRated?: boolean;
    creationDate: Date;
    duration: number;
    description: string;
}