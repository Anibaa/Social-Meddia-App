import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showDropdown: boolean = false;
  searchTerm: string = '';
  @Output() searchTermChanged = new EventEmitter<string>();
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }


  toggleDropdown(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.showDropdown = !this.showDropdown;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdown = document.querySelector('.dropdown-menu') as HTMLElement;
    if (dropdown && !dropdown.contains(target) && !target.closest('.dropdown')) {
      this.showDropdown = false;
    }
  }

  logout() {
    console.log('Logout clicked');
    this.showDropdown = false;
  }
  constructor(private router: Router) {}

  onSearchTermChange(): void {
    this.router.navigate([], {
      queryParams: { search: this.searchTerm },
      queryParamsHandling: 'merge' // Keeps other query parameters
    });}
}
