import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeList:any;
  employeeListData:any;
  filterData:any;
  sortFlag:boolean = false;
  constructor(private employeeService:EmployeeService) { }
  // Call employee list function on page load 
  ngOnInit() {
    this.getEmployeeList();
  }

  // Get employeeList from services
  getEmployeeList(){
    let dataList = this.employeeService.getAllData();
    this.success(dataList)
  }
  
  sort(){
    this.sortFlag =!this.sortFlag;
  }
  // Get getEmployeeList success
  success(data){
    this.employeeListData = data.data;
    if(this.employeeListData){

      for (var i = 0; i < this.employeeListData.length; i++) {
        this.employeeListData[i].name = this.employeeListData[i].first_name +' '+ this.employeeListData[i].last_name;
      }
    }
  }
  
  delete(index:number){
    // get confirm box for confirmation
    let r = confirm("Are you sure?");
    if (r == true) {
      this.employeeService.delete(index);
      this.getEmployeeList();
    }
  }

}
