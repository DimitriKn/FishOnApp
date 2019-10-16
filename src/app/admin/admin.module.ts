import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {PostCreatePageComponent} from './post-create-page/post-create-page.component';
import {PostEditPageComponent} from './post-edit-page/post-edit-page.component';
import {WatersCreatePageComponent} from './waters-create-page/waters-create-page.component';
import {WatersEditPageComponent} from './waters-edit-page/waters-edit-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {ProfileEditPageComponent} from './profile-edit-page/profile-edit-page.component';

@NgModule({
  declarations: [AdminLayoutComponent, LoginPageComponent, PostEditPageComponent, ProfileEditPageComponent, WatersEditPageComponent, WatersCreatePageComponent, PostCreatePageComponent, ProfilePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'create', component: PostCreatePageComponent},
          {path: 'post/:id/edit', component: PostEditPageComponent},
          {path: 'waters-post/:id/edit', component: WatersEditPageComponent},
          {path: 'waters-create', component: WatersCreatePageComponent},
          {path: 'profile', component: ProfilePageComponent},
          {path: 'profile/:id/edit', component: ProfileEditPageComponent},
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export  class AdminModule {

}
