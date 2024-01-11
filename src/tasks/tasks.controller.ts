import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(@Body() taskDto: TaskDto) {
    return this.tasksService.create(taskDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() taskDto: TaskDto) {
    return this.tasksService.update(id, taskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
