import { Module } from '@nestjs/common';

import { TasksModule } from './tasks/tasks.module';
import * as taskService from './tasks/tasks.service';

@Module({
  imports: [TasksModule],
  providers: [taskService.TasksService],
})
export class AppModule {}
