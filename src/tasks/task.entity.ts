import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './../auth/user.entity';

import { TaskStatus } from './task-status.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid', { name: 'task_id' })
  id: string;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'status' })
  status: TaskStatus;

  @ManyToOne((_type) => User, (user) => user.task, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}
