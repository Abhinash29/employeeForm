import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { HueGroup } from './huegroup';
import { Light } from './light';
import { Item } from './items';
@Component({
  selector: 'app-for-demos',
  templateUrl: './for-demos.component.html',
  styleUrls: ['./for-demos.component.css'],
})
export class ForDemosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  employeeList: Employee[] = [
    new Employee('1', 'john', 'Male', 'Development'),
    new Employee('2', 'Abhi', 'Male', 'data science'),
    new Employee('3', 'charlie', 'Female', 'QA'),
  ];

  hueLightData: HueGroup[] = [
    { Name: 'group 1', Lights: [new Light('light 1'), new Light('light 2')] },
    { Name: 'group 2', Lights: [new Light('light 3')] },
  ];

  selectedValue: string = 'Select';
  items: Item[] = [
    new Item('Select', 0),
    new Item('One', 1),
    new Item('Two', 2),
    new Item('Three', 3),
    new Item('Four', 4),
    new Item('Five', 5),
  ];
}
