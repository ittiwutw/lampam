import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  // },
  // {
  //   path: 'list',
  //   loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  // },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'news-detail', loadChildren: './news-detail/news-detail.module#NewsDetailPageModule' },
  { path: 'matchs', loadChildren: './matchs/matchs.module#MatchsPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'products-detail', loadChildren: './products-detail/products-detail.module#ProductsDetailPageModule' },
  { path: 'contactus', loadChildren: './contactus/contactus.module#ContactusPageModule' },
  { path: 'chicken', loadChildren: './chicken/chicken.module#ChickenPageModule' },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
  { path: 'video', loadChildren: './video/video.module#VideoPageModule' },
  { path: 'galleries', loadChildren: './galleries/galleries.module#GalleriesPageModule' },
  { path: 'live-detail', loadChildren: './live-detail/live-detail.module#LiveDetailPageModule' },
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'shopping-step', loadChildren: './shopping-step/shopping-step.module#ShoppingStepPageModule' },
  { path: 'shopping-step-pay', loadChildren: './shopping-step-pay/shopping-step-pay.module#ShoppingStepPayPageModule' },
  { path: 'shopping-step-check', loadChildren: './shopping-step-check/shopping-step-check.module#ShoppingStepCheckPageModule' },
  { path: 'shopping-bank-transfer', loadChildren: './shopping-bank-transfer/shopping-bank-transfer.module#ShoppingBankTransferPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
