import { Request, Response } from 'express';

import AppError from '../../../errors/AppError';
import CourseRepository from '../../courses/repositories/CourseRepository';
import LessonRepository from '../repositories/LessonRepository';
import ICreateLessonDTO from '../dtos/CreateLessonDTO';

export default class LessonController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      duration,
      description,
      course_id,
      video_id,
    }: ICreateLessonDTO = request.body;

    const courseRepository = new CourseRepository();
    const lessonRepository = new LessonRepository();

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

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const lessonRepository = new LessonRepository();

    const lessons = await lessonRepository.findLessonById(id);

    if (!lessons) {
      throw new AppError('Lessons with the course is not found.');
    }

    return response.json(lessons);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, duration, description, video_id } = request.body;

    const lessonRepository = new LessonRepository();

    const lesson = await lessonRepository.findLessonById(id);

    if (!lesson) {
      throw new AppError('Lesson not exist.');
    }

    lesson.name = name;
    lesson.duration = duration;
    lesson.description = description;
    lesson.video_id = video_id;

    await lessonRepository.save(lesson);

    return response.json(lesson);
  }
}
