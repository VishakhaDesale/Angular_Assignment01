import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class LayoutComponent {
  sidebarOpen = signal(false);
  toggle()     { this.sidebarOpen.update(v => !v); }
  close()      { this.sidebarOpen.set(false);       }
}