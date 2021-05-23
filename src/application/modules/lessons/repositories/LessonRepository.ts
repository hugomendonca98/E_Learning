import { getRepository, Repository } from 'typeorm';

import ICreateLessonDTO from '../dtos/CreateLessonDTO';
import Lesson from '../models/Lesson';
import ILessonRepository from './interfaces/ILessonRepository';

export default class LessonRepository implements ILessonRepository {
  private ormRepository: Repository<Lesson>;

  constructor() {
    this.ormRepository = getRepository(Lesson);
  }

  public async create({
    name,
    duration,
    course_id,
    description,
    video_id,
  }: ICreateLessonDTO): Promise<Lesson> {
    const lesson = this.ormRepository.create({
      name,
      duration,
      course_id,
      description,
      video_id,
    });

    await this.ormRepository.save(lesson);

    return lesson;
  }

  public async findLessonsWithCourseId(
    course_id: string,
  ): Promise<Lesson[] | undefined> {
    const lessons = await this.ormRepository.find({
      where: {
        course_id,
      },
      relations: ['course'],
    });

    return lessons;
  }
}
