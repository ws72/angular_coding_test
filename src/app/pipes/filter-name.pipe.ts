import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

	transform(value: any, args?: any): any {
		if (args != undefined && args != null && args != '') {
			return value.filter(data => (data.name.toLowerCase()).indexOf(args.toLowerCase()) > -1);
		}
		return value;
	}


}
