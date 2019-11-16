import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { ContentComponent } from './components/content-area/content/content.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeViewComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
