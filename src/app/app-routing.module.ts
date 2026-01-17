import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuditionsComponent } from './auditions/auditions.component';
import { PhotosComponent } from './photos/photos.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'auditions', component: AuditionsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'bookings', component: BookingsComponent },
  { path:'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration:"enabled",
      scrollOffset: [0, 0],
      anchorScrolling: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
