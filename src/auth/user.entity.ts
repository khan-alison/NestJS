import { Task } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  id: string;

  @Column({ name: 'username', unique: true })
  username: string;

  @Column({ name: 'password' })
  password: string;

  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  task: Task[];
}
