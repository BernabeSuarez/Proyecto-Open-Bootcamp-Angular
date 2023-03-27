import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/models/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: ITask | undefined;

  //enviara la info de la tarea a borrar al componente padre
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor() {}

  ngOnInit(): void {}

  deleteTask() {
    //notificamos al comopnente superior la tarea a eliminar
    this.delete.emit(this.task); //notificamos al comopnente superior la tarea a eliminar
  }
}
