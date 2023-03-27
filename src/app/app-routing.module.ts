import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './layout/guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes:Routes=[
  { path: '',component:LayoutComponent, loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) ,canActivate:[AuthGuard]},
  { path: 'login', loadChildren: () => import('./Security/login/login.module').then(m => m.LoginModule) },
  { path: 'create', loadChildren: () => import('./Security/create-user/create/create.module').then(m => m.CreateModule) },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
