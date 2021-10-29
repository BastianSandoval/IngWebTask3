import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule,
    ClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
