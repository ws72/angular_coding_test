import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent,homeChildRoutes } from './components/home/home.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { FilterNamePipe } from './pipes/filter-name.pipe';
import { FilterDepartmentPipe } from './pipes/filter-department.pipe';
import { SortNamePipe } from './pipes/sort-name.pipe';



// Parent Routes
const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    children :homeChildRoutes
  },
  {
    path: '**',
    redirectTo: ''
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    FilterNamePipe,
    FilterDepartmentPipe,
    SortNamePipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
