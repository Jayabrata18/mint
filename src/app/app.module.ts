import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MintComponent } from './mint/mint.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { MarqueeComponent } from './marquee/marquee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    SliderComponent,
    FooterComponent,
    AboutComponent,
    MintComponent,
    SearchBarComponent,
    RoadmapComponent,
    MarqueeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
