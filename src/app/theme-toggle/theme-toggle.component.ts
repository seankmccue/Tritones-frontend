import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {

  constructor(private themeService: ThemeService) {}

  toggleTheme(event: any): void {
    this.themeService.setDarkTheme(event.target.checked);
  }
}
