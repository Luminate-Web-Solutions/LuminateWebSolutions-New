import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  toggleDropdown(event: Event): void {
    // Prevent default link behavior on mobile
    if (window.innerWidth <= 768) {
      event.preventDefault();
      const dropdown = (event.target as HTMLElement).closest('.dropdown');
      if (dropdown) {
        dropdown.classList.toggle('active');
      }
    }
  }
}
