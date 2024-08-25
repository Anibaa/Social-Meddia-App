import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-app-frontend';
  searchTerm: string = ''; // Initialisation comme chaîne de caractères

  onSearchTermChanged(event: string) {
    this.searchTerm = event; // S'assurer que `event` est bien une chaîne de caractères
    // Logique supplémentaire ici
  }
}
