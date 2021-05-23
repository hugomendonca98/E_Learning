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

  findLessonsWithCourseId(course_id: string): Promise<Lesson[] | undefined>;
}
