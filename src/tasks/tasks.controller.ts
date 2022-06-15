import { TaskService } from './task.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import Task from './task';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getTask(@Param('id') id: number): Promise<Task> {
    return this.taskService.getTask(id);
  }

  @Post()
  async setTask(@Body() task: Task): Promise<Task> {
    return this.taskService.setTask(task);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() task: Task): Promise<Task> {
    task.id = id;
    return this.taskService.updateTask(task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number) {
    this.taskService.deleteTask(id);
  }
}
