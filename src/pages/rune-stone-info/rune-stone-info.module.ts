import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RuneStoneInfoPage } from './rune-stone-info';

@NgModule({
  declarations: [
    RuneStoneInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(RuneStoneInfoPage),
  ],
})
export class RuneStoneInfoPageModule {}
