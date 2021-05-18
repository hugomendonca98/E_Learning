import { Request, Response } from 'express';
import CourseRepository from '../repositories/CourseRepository';

export default class ListCoursesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const courseRepository = new CourseRepository();

    const courses = await courseRepository.findAllCourses();

    return response.json(courses);
  }
}
