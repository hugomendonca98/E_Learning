import { Request, Response } from 'express';
import AppError from '../../../errors/AppError';
import LessonRepository from '../repositories/LessonRepository';

export default class LessonsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params;

    const lessonRepository = new LessonRepository();

    const lessons = await lessonRepository.findLessonsWithCourseId(course_id);

    if (!lessons) {
      throw new AppError('Lessons with the course is not found.');
    }

    return response.json(lessons);
  }
}
