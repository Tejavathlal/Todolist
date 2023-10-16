import { Component , OnInit} from '@angular/core';
import { TodoService } from 'src/app/Service/todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit{

  taskinput: string = "";
  constructor(private todoform: TodoService){}

  ngOnInit(): void {
    
  }
  
  addtodo(){
  this.todoform.addtodo(this.taskinput);
  this.taskinput="";
  }

  addreset(){
    this.taskinput = "";
  }
}
