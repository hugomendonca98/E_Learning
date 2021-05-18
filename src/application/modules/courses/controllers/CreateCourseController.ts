import { Request, Response } from 'express';

import CourseRepository from '../repositories/CourseRepository';

export default class CreateCourseController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, image } = request.body;

    const courseRepository = new CourseRepository();

    const course = await courseRepository.create({
      name,
      image,
    });

    return response.json(course);
  }
}
