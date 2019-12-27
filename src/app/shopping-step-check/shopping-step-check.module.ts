import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShoppingStepCheckPage } from './shopping-step-check.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingStepCheckPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShoppingStepCheckPage]
})
export class ShoppingStepCheckPageModule {}
