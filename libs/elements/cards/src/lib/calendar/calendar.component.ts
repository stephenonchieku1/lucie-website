import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'elewa-website-calendar',
  standalone: true,
  imports: [
    CommonModule,    
    MatDatepickerModule,
    MatNativeDateModule,   
    MatCardModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {

  selected: Date | null;
  
}
