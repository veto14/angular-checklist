import { Component, ɵisBoundToModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import { DataService } from '../shared/data.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  tasks: Task[] = [];
  showValidationErrors: boolean | undefined

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tasks = this.dataService.getAllTasks()
  }

  onFormSubmit(form: NgForm){
    if(form.invalid) return this.showValidationErrors = true;

    this.dataService.addTask(new Task(form.value.text))

    form.reset()   
    return this.showValidationErrors=false;
  }

  toggleCompleted(task: Task){
    task.completed = !task.completed;
  }

  editTask(task: Task){
    //need index of task + new info from user

    const index = this.tasks.indexOf(task)

    let dialogRef = this.dialog.open(EditTaskDialogComponent, {
      width: '700px',
      data: task
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.dataService.updateTask(index, result)
      }
    })
  }

  deleteTask(task: Task){
    const index = this.tasks.indexOf(task)
    this.dataService.deleteTask(index)
  }

}
