import { Injectable } from '@angular/core';
import { ReturnData,Employee, IEmployee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor() { }
  getAllData(): ReturnData {
    let ret:ReturnData;
    if(localStorage.getItem(Employee.employee) && localStorage.getItem(Employee.employee) != '') {
      ret = {
        code : 200,
        message : "List Fetched Successfully",
        data : JSON.parse(localStorage.getItem(Employee.employee))
      }
    }else{
      ret = {
        code : 400,
        message : "Not data found.",
        data : ''
      }
    }
    return ret;
  }

  add(data:IEmployee):ReturnData{
    
    let dataList:IEmployee[] = JSON.parse(localStorage.getItem(Employee.employee));
    let returnData:ReturnData;
    if(!dataList){
      dataList=[];
    }
    dataList.unshift(data);

    localStorage.setItem(Employee.employee,JSON.stringify(dataList));

    returnData = {
      code : 200,
      message : "Successfully Added",
      data : JSON.parse(localStorage.getItem(Employee.employee))
    }    
    return returnData;
  }

  delete(index:number):ReturnData{
    let dataList = JSON.parse(localStorage.getItem(Employee.employee));
    if(dataList && dataList.length>0){
      dataList.splice(index, 1);
      localStorage.setItem(Employee.employee,JSON.stringify(dataList));
      return {
        code : 200,
        message : "Successfully Deleted",
        data : ''
      }
    }else{
      return {
        code : 400,
        message : "Failded to Deleted",
        data : ''
      }
    }
  }
}
