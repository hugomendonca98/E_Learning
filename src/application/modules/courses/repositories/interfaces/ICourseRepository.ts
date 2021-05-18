import ICreateCourseDTO from '../../dtos/ICreateCourseDTO';
import Course from '../../models/Course';

export default interface ICourseRepository {
  create({ name, image }: ICreateCourseDTO): Promise<Course>;
  findCourseById(id: string): Promise<Course | undefined>;
  save(course: Course): Promise<Course>;
}
