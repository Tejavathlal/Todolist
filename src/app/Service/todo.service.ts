import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  taskid: number = 3
  todolist  = [
    {
      id:1,'task': "Task1"
    },
     
    {
      id:1,'task': "Task2"
    }
  ]

  constructor() {}

  addtodo(taskName:any){
    this.todolist.push({'id': this.taskid++, 'task': taskName})
  }

  deletetodo(index:number){
    this.todolist.splice(index,1);
  }
}
