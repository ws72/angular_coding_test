import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EmployeeListComponent } from './employee-list.component';
import { AppComponent } from '../../app.component';
import { HomeComponent } from '../home/home.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { FilterNamePipe } from '../../pipes/filter-name.pipe';
import { FilterDepartmentPipe } from '../../pipes/filter-department.pipe';
import { SortNamePipe } from '../../pipes/sort-name.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        EmployeeListComponent,
        EmployeeAddComponent,
        FilterNamePipe,
        FilterDepartmentPipe,
        SortNamePipe ],
        
      imports: [ 
        RouterTestingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
