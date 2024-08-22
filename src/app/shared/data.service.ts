import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasks: Task[] = [
    new Task('Test!', true),
    new Task('This is most certainly not a Lorem Ipsum or something like that.')
  ]

  constructor() { }

  getAllTasks(){
    return this.tasks
  }

  addTask(task: Task){
    this.tasks.push(task)
  }

  updateTask(index: number, updatedTask: Task){
    this.tasks[index] = updatedTask
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
