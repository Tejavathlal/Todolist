import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/Service/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {


  constructor(private todo: TodoService){}

  public todos: any;

  ngOnInit(): void {

   this.todos = this.todo.todolist
    
  }
  removetodo(i:number){
    this.todo.deletetodo(i);
  }
 
}
