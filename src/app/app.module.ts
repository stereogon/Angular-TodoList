import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgIconsModule } from '@ng-icons/core';
import {octXCircleFill} from '@ng-icons/octicons';

import { AppComponent } from './app.component';
import { TaskEntryComponentComponent } from './task-entry-component/task-entry-component.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { TaskElementComponentComponent } from './task-element-component/task-element-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskEntryComponentComponent,
    TaskListComponentComponent,
    TaskElementComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgIconsModule.withIcons({octXCircleFill})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
