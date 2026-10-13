import {Component, signal} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatIcon} from '@angular/material/icon';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatIconButton} from '@angular/material/button';

@Component({
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatIcon,
    MatSidenavContent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatListItem,
    MatNavList,
    MatIconButton
  ],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  readonly collapsed = signal(false);
  readonly options = [
    {link: '/home', label: 'Home', icon: 'home'},
  ];

  toggleMenu(): void {
    this.collapsed.update(value => !value);
  }
}
