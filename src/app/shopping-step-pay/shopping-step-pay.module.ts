import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShoppingStepPayPage } from './shopping-step-pay.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingStepPayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShoppingStepPayPage]
})
export class ShoppingStepPayPageModule {}
