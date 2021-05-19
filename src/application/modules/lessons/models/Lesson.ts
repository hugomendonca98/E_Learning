import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Course from '../../courses/models/Course';

@Entity('lesson')
export default class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  duration: number;

  @Column()
  course_id: string;

  @ManyToOne(() => Course)
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @Column()
  description: string;

  @Column()
  video_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
