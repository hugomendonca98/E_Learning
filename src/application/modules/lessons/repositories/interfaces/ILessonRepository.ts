import ICreateLessonDTO from '../../dtos/CreateLessonDTO';
import Lesson from '../../models/Lesson';

export default interface ILessonRepository {
  create({
    name,
    duration,
    course_id,
    description,
    video_id,
  }: ICreateLessonDTO): Promise<Lesson>;

  findLessonById(lesson_id: string): Promise<Lesson | undefined>;

  save(lesson: Lesson): Promise<Lesson>;
}
