import { getRepository, Repository } from 'typeorm';

import ICreateLessonDTO from '../dtos/CreateLessonDTO';
import Lesson from '../models/Lesson';

export default class LessonRepository {
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
}
