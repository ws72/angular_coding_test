import { Component } from '@angular/core';
import {  IEmployee , Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Employee Management';

	employeeList : IEmployee[] = [
		{	
			id : 1,
			first_name : "Song",
			last_name : "Wang",
			phone : "0487866666",
			department : "Science"
		},
		{
			id : 2,
			first_name : "test",
			last_name : "test1",
			phone : "0487888888",
			department : "Commerce"
		},
		{
			id : 3,
			first_name : "Tony",
			last_name : "Wang",
			phone : "0497988888",
			department : "Science"
		}
	];

	constructor() {
		localStorage.setItem(Employee.employee, JSON.stringify(this.employeeList));
	}
}
