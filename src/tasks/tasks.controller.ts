import { Body, Controller, Get, Post } from '@nestjs/common';
import { title } from 'process';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTask();
  }

  @Post()
  createTask(@Body('title') title, @Body('description') description): Task {
    return this.tasksService.createTask(title, description);
  }
}
