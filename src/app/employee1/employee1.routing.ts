import {Routes,RouterModule  } from "@angular/router";
import { Employee1Component } from './employee1.component';











const arr: Routes=[

    {path:'Employee',component:Employee1Component },
]
    export const employee1Routing = RouterModule.forChild(arr);
