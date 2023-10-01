import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SliderComponent } from './slider/slider.component';
import { FilterComponent } from './filter/filter.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodeCardComponent } from './episode-card/episode-card.component';
import { EpisodeInfoComponent } from './episode-info/episode-info.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SliderComponent,
    FilterComponent,
    CardsComponent,
    CardComponent,
    EpisodesComponent,
    EpisodeCardComponent,
    EpisodeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
