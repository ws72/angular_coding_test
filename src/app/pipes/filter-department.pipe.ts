import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDepartment'
})
export class FilterDepartmentPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		if (args != undefined && args != null && args != '') {
			return value.filter(data => (data.department.toLowerCase()).indexOf(args.toLowerCase()) > -1);
		}
		return value;
	}
}
