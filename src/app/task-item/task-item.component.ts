import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

 @Input() task!: Task;
 @Output() taskClicked: EventEmitter<void> = new EventEmitter()
 @Output() editClicked: EventEmitter<void> = new EventEmitter()
 @Output() deleteClicked: EventEmitter<void> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {

  }


  onTaskClicked(){
    this.taskClicked.emit();
  }

  onEditClicked(){
    this.editClicked.emit();
  }

  onDeleteClicked(){
    this.deleteClicked.emit();
  }
}
