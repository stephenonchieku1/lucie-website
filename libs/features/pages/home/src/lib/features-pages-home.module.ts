import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';

 import { ElementsLayoutFooterModule } from '@lucie-website/elements/layout/footer';
 import { FeaturesPagesLoginpageModule } from '@lucie-website/features/pages/loginpage';
import { FeaturesPagesSignupModule } from '@lucie-website/features/pages/signup';
@NgModule({
  imports: [CommonModule, HomeRoutingModule,ElementsLayoutFooterModule,FeaturesPagesLoginpageModule,FeaturesPagesSignupModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
