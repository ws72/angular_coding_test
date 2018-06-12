
export interface ReturnData{
    code:number,
    message:string,
    data:string,
}
  
export interface IEmployee{
    id : number,
    first_name : string,
    last_name : string,
    phone : string,
    department : string
}
  

export enum Employee{
    employee = 'employee'
} 