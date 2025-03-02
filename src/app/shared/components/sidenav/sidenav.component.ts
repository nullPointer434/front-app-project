import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavigation } from '@shared/interfaces/app-navigation.interface';

@Component({
  selector: 'app-sidenav',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Input() appNavigation!: AppNavigation[];
  @Input() isOpen!: boolean;
  @Input() top!: string;

  @Output() itemEmitter: EventEmitter<AppNavigation> = new EventEmitter<AppNavigation>();

  onRoute(item: AppNavigation): void {
    this.itemEmitter.emit(item);
  }
}
