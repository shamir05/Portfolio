import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { HomePageComponent } from './myComponents/home-page/home-page.component';
import { AboutComponent } from './myComponents/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './myComponents/resume/resume.component';
import { ContactComponent } from './myComponents/contact/contact.component';
import { ServicesComponent } from './myComponents/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route, redirect to 'home' page
  { path: 'home', component: HomePageComponent }, // Define your routes here
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'resume', component: ResumeComponent},
  { path: 'contact', component: ContactComponent}
  // Add more routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
