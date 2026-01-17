import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDarkTheme!: Observable<boolean>;
  isMobileNavOpen = false;
  logoSrc!: string;
  
  constructor(private themeService: ThemeService) {}
  
  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;

    this.isDarkTheme.subscribe((theme: boolean) => {
      const body = document.body;
      theme ? body.classList.add('dark') : body.classList.remove('dark');
      this.logoSrc = theme ? 'assets/images/logo/logolight.png' : 'assets/images/logo/logodark.png';
    });
  }

  closeMobileNav(): void {
    this.isMobileNavOpen = false;
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }
  
  
}
