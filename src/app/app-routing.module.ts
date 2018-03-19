import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:  'full'
  },
  {
    path: 'home',
    loadChildren: 'app/pages/home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: 'app/pages/about/about.module#AboutModule'
  },
  {
    path: 'skills',
    loadChildren: 'app/pages/skills/skills.module#SkillsModule'
  },
  {
    path: 'contact',
    loadChildren: 'app/pages/contact/contact.module#ContactModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
