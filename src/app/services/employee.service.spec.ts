import { TestBed, inject } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { Employee } from '../model/employee';

describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService]
    });
    localStorage.setItem(Employee.employee, JSON.stringify(''));
  });

  it('should be created', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));

  it('should not be get all data list', inject([EmployeeService], (service: EmployeeService) => {
    let testData = service.getAllData();
    expect(testData.data).toEqual('');
  }));

  it('should be add', inject([EmployeeService], (service: EmployeeService) => {
    let testData = 
		{	
			id : 5,
			first_name : "Song",
			last_name : "Wang",
			phone : "0487866666",
			department : "Science"
		};
    expect(service.add(testData).code).toEqual(200);
  }));

  it('should be delete', inject([EmployeeService], (service: EmployeeService) => {
    expect(service.delete(2).code).toEqual(400);
  }));
});
