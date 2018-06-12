import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private employeeServiceService:EmployeeService) { }

  ngOnInit() {
    this.createForm();
  }

  private addForm : FormGroup;
  createForm(){
      this.addForm = this.formBuilder.group({
        first_name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
        last_name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
        phone: ['',  [Validators.required]],
        department: ['',  [Validators.required]]
      });			
  }
  
  doRegister(){
    let ret = this.employeeServiceService.add(this.addForm.value);
    if(ret) {
      if (ret.code == 200) {
        this.router.navigate(['/']);
      }
    }
  }
}
