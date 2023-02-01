import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTask(): Task[] {
    return this.tasks;
  }

  getTaskWithFilter(filterDto: GetTaskFilterDto): Task[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTask();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        }
        return false;
      });
    }

    return tasks;
  }

  findTaskById(id: string): Task {
    const found = this.tasks.find((task) => task.id === id);
    if (!found) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return found;
  }

  createTask(CreateTaskDto: CreateTaskDto): Task {
    const { title, description } = CreateTaskDto;
    const task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string): void {
    const found = this.findTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id !== found.id);
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.findTaskById(id);
    task.status = status;
    return task;
  }
}
