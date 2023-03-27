import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/models/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  //reformular como una lista de tareas

  tarea1: ITask = {
    title: 'tarea 1',
    description: 'Descripcion de la tarea 1',
    completed: true,
    level: Levels.Urgent,
  };
  tarea2: ITask = {
    title: 'tarea 2',
    description: 'Descripcion de la tarea 2',
    completed: false,
    level: Levels.Info,
  };

  constructor() {}
  ngOnInit(): void {}

  deleteTask(task: ITask) {
    //Sustituir por un .Splice para eliminar de la lista de tareas
    alert(`Se eliminara la tarea: ${task.title}`);
  }
}
