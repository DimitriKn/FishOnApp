import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CoughtPageComponent } from './pages/cought-page/cought-page.component';
import { FishPageComponent } from './pages/fish-page/fish-page.component';
import { WatersPageComponent } from './pages/waters-page/waters-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';
import { CreatePageComponent } from './admin/create-page/create-page.component';
import { EditPageComponent } from './admin/edit-page/edit-page.component';
import { ProfilePageComponent } from './admin/profile-page/profile-page.component';
import { CreateWatersPageComponent } from './admin/create-waters-page/create-waters-page.component';
import { WatersCreatePageComponent } from './admin/waters-create-page/waters-create-page.component';
import { WatersEditPageComponent } from './admin/waters-edit-page/waters-edit-page.component';
import { PostEditPageComponent } from './admin/post-edit-page/post-edit-page.component';
import { PostCreatePageComponent } from './admin/post-create-page/post-create-page.component';
import { ProfileEditPageComponent } from './admin/profile-edit-page/profile-edit-page.component';
import { PostComponent } from './shared/components/post/post.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, AppRoutingModule // imports firebase/storage only needed for storage features
  ],
  declarations: [ AppComponent, MainLayoutComponent, HomePageComponent, CoughtPageComponent, FishPageComponent, WatersPageComponent, GalleryPageComponent, LoginPageComponent, CreatePageComponent, EditPageComponent, ProfilePageComponent, CreateWatersPageComponent, WatersCreatePageComponent, WatersEditPageComponent, PostEditPageComponent, PostCreatePageComponent, ProfileEditPageComponent, PostComponent ],
  bootstrap: [ AppComponent ],
  providers: [],

})
export class AppModule { }
