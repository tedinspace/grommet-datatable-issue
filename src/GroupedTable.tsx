import React from 'react';
import {DataTable } from 'grommet';
interface IData{
    name:string;
    location:string;
    date:string;
    percent:number;
    paid:number
}
export const DATA:IData[] = [
  {
    name: 'Alan',
    location: '',
    date: '',
    percent: 0,
    paid: 0,
  },
  {
    name: 'Bryan',
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 30,
    paid: 1234,
  },
  {
    name: 'Chris',
    location: 'Palo Alto',
    date: '2018-06-09',
    percent: 40,
    paid: 2345,
  },
  {
    name: 'Eric',
    location: 'Palo Alto',
    date: '2018-06-11',
    percent: 80,
    paid: 3456,
  },
  {
    name: 'Doug',
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 60,
    paid: 1234,
  },
  {
    name: 'Jet',
    location: 'Palo Alto',
    date: '2018-06-09',
    percent: 40,
    paid: 3456,
  },
  {
    name: 'Michael',
    location: 'Boise',
    date: '2018-06-11',
    percent: 50,
    paid: 1234,
  },
  {
    name: 'Tracy',
    location: 'San Francisco',
    date: '2018-06-10',
    percent: 10,
    paid: 2345,
  },
];



export const columns = [
  {
    header: "name",
    property: "name"
  },
  {
    header: "location",
    property: "location"
  }
  ,
  {
    header: "date",
    property: "date"
  },
  {
    header: "percent",
    property: "percent"
  },
  {
    header: "paid",
    property: "paid",
    render: ({paid})=><i>{paid}</i>
  }
];
export function GroupTable() {
  return (
      <DataTable columns={columns} data={DATA} sortable onSelect={()=>{}} groupBy={"location"}/>
  );
}

