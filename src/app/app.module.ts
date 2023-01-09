import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component';

import {MatDialogModule} from '@angular/material/dialog';
import { ToolTipDirective } from './shared/tool-tip.directive'

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskItemComponent,
    EditTaskDialogComponent,
    ToolTipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
