import { Request, Response } from 'express';

import AppError from '../../../errors/AppError';

import ICreateCourseDTO from '../dtos/ICreateCourseDTO';
import CourseRepository from '../repositories/CourseRepository';

type IRequestParams = {
  course_id: string;
};

type IRequestBody = {
  name: string;
  image: string;
};

export default class CreateCourseController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, image }: ICreateCourseDTO = request.body;

    const courseRepository = new CourseRepository();

    const course = await courseRepository.create({
      name,
      image,
    });

    return response.json(course);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const courseRepository = new CourseRepository();

    const courses = await courseRepository.findAllCourses();

    return response.json(courses);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params as IRequestParams;
    const { name, image }: IRequestBody = request.body;

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
