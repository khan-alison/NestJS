import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
