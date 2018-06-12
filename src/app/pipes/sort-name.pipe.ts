import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortName'
})
export class SortNamePipe implements PipeTransform {

  // transform(ary: any, fn: Function = (a,b) => a > b ? 1 : -1): any {
  //   return ary.sort(fn)
  // }
  
	transform(value: any, args?: any): any {
		if (args != undefined && args != null) {
			return value.sort(function(a,b){
        return args? (a.last_name > b.last_name ? 1 : -1) : (a.last_name < b.last_name ? 1 : -1) ;
      });
    }
		return value;
	}
}
