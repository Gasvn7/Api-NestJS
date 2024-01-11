import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TasksService {
  private tasks = [];

  findAll() {
    if(this.tasks.length === 0) {
        return "No hay tareas. Cambie el método a POST y dirigase a: http://localhost:3000/tasks"
    }
    return this.tasks;
  }

  findOne(id: string) {
    const task = this.tasks.find((task) => task.id === id);
  
    if (!task) {
      throw new NotFoundException(`La tarea con el ID ${id} no se encontró.`);
    }else if (!task.title || !task.description){
      return {
        error: "Vuelve a enviar la tarea pero esta vez en formato JSON, de esta manera exceptuando la propiedad 'error'",
        title: "-Titulo-",
        description: "-Mensaje-"
      }
    }
    
    return task;  
  }

  create(taskDto: TaskDto) {
    const newTask = {
      id: Date.now().toString(),
      ...taskDto,
    };
    this.tasks.push(newTask);
    return newTask;
  }
  

  update(id: string, taskDto: TaskDto) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = { id, ...taskDto };
      return this.tasks[index];
    }
    throw new NotFoundException(`La tarea con el ID ${id} no se encontró y no se actualizó.`);
  }

  remove(id: string) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      const removedTask = this.tasks[index];
      this.tasks.splice(index, 1);
      return removedTask;
    }
    return null;
  }
}
