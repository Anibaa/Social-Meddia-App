import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  showNotifications: boolean = false;
  notifications = [
    { title: 'New comment on your post', time: '2 minutes ago' },
    { title: 'You have a new follower', time: '10 minutes ago' },
    { title: 'Your post was liked', time: '1 hour ago' },
  ];

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  ngOnInit(): void {
    // Initialization logic here
  }
}

