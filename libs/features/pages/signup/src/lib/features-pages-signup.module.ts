import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SignupComponent],
  exports: [SignupComponent],
})
export class FeaturesPagesSignupModule {}
