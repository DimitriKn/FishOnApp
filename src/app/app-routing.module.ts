import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {CaughtPageComponent} from './pages/caught-page/caught-page.component';
import {FishPageComponent} from './pages/fish-page/fish-page.component';
import {WatersPageComponent} from './pages/waters-page/waters-page.component';
import {GalleryPageComponent} from './pages/gallery-page/gallery-page.component';
import {PostPageComponent} from './pages/post-page/post-page.component';
import {WatersPostPageComponent} from './page/waters-post-page/waters-post-page.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'post/:id', component: PostPageComponent},
      {path: 'waters-post/:id', component: WatersPostPageComponent},
      {path: 'caught', component: CaughtPageComponent},
      {path: 'fish', component: FishPageComponent },
      {path: 'waters', component: WatersPageComponent},
      {path: 'gallery', component: GalleryPageComponent}
      ]
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
