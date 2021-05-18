import { Request, Response } from 'express';

import AppError from '../../../errors/AppError';
import CourseRepository from '../repositories/CourseRepository';

export default class UpdateCourseController {
  public async Update(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params;
    const { name, image } = request.body;

    const courseRepository = new CourseRepository();

    const course = await courseRepository.findCourseById(course_id);

    if (!course) {
      throw new AppError('Course is not found.');
    }

    course.name = name;
    course.image = image;

    const courseUpdated = await courseRepository.save(course);

    return response.json(courseUpdated);
  }
}
