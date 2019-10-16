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
import { CaughtPageComponent } from './pages/caught-page/caught-page.component';
import { FishPageComponent } from './pages/fish-page/fish-page.component';
import { WatersPageComponent } from './pages/waters-page/waters-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';


import { PostPageComponent } from './pages/post-page/post-page.component';
import { WatersPostPageComponent } from './page/waters-post-page/waters-post-page.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, AppRoutingModule // imports firebase/storage only needed for storage features
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [ AppComponent, MainLayoutComponent, HomePageComponent, CaughtPageComponent, FishPageComponent, WatersPageComponent, GalleryPageComponent,  PostPageComponent, WatersPostPageComponent ],
  bootstrap: [ AppComponent ],
  providers: [],

})
export class AppModule { }
