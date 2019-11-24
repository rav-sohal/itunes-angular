import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { PlaylistViewComponent } from './views/playlist-view/playlist-view/playlist-view.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home' , pathMatch:'full'},
  { path: 'home', component: HomeViewComponent},
  { path: 'playlist', component: PlaylistViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
