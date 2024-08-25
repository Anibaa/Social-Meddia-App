import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationModule } from '../notification/notification.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    
  ],
  imports: [
    NotificationModule,
    FormsModule,
    CommonModule
    
  ]
})
export class NavbarModule { }
