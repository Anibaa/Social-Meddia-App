import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './features/navbar/navbar/navbar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PostModule } from './features/post/post.module';
import { NotificationModule } from "./features/notification/notification.module";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    CoreModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    NgxChartsModule,
    FormsModule,
    RouterModule.forRoot([]),
    PostModule,
    NotificationModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
