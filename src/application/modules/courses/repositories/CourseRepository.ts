import { getRepository, Repository } from 'typeorm';
import ICreateCourseDTO from '../dtos/ICreateCourseDTO';
import Course from '../models/Course';
import ICourseRepository from './interfaces/ICourseRepository';

export default class CourseRepository implements ICourseRepository {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  public async create({ name, image }: ICreateCourseDTO): Promise<Course> {
    const course = this.ormRepository.create({
      name,
      image,
    });

    await this.ormRepository.save(course);

    return course;
  }
}
