import { Request, Response } from 'express';

import AppError from '../../../errors/AppError';
import CourseRepository from '../../courses/repositories/CourseRepository';
import LessonRepository from '../repositories/LessonRepository';
import ICreateLessonDTO from '../dtos/CreateLessonDTO';

export default class CreateLessonController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      duration,
      description,
      course_id,
      video_id,
    }: ICreateLessonDTO = request.body;

    const lessonRepository = new LessonRepository();
    const courseRepository = new CourseRepository();

    const course = await courseRepository.findCourseById(course_id);

    if (!course) {
      throw new AppError('Course does not exist.');
    }

    const lesson = await lessonRepository.create({
      name,
      duration,
      description,
      course_id,
      video_id,
    });

    return response.json(lesson);
  }
}
