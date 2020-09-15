import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { PuntosComponent } from './puntos/puntos.component';
import { PuntosListComponent } from './puntosList/puntosList.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';
// import { MyMatchComponent } from './my-match/my-match.component';
import { BracketsComponent } from './brackets/brackets.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'puntos', component: PuntosComponent },
  { path: 'brackets', component: BracketsComponent },
  {
    path: 'admin/puntos',
    component: PuntosListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
