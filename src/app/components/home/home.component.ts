import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes ,Router} from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// Define and export child routes of HomeComponent
export const homeChildRoutes : Routes = [
{
  path: '',
  component: EmployeeListComponent
},
{
  path: 'add',
  component: EmployeeAddComponent
}
];
