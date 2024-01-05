import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaInfoCardComponent } from './elewa-info-card/elewa-info-card.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
@NgModule({
  imports: [CommonModule],
  declarations: [ElewaInfoCardComponent, DatePickerComponent],
  exports: [ElewaInfoCardComponent],
})
export class CardsModule {}
