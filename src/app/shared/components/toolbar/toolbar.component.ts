import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Input() appName!: string;
  @Input() userName!: string;
  @Input() userInitials!: string;
  @Input() exitAppLabel!: string;

  @Output() signOutEmitter: EventEmitter<void> = new EventEmitter<void>();
  @Output() toggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggle: boolean = true;

  onSignOut(): void {
    this.signOutEmitter.emit();
  }

  onToggle(): void {
    this.toggle = !this.toggle;
    this.toggleEmitter.emit(this.toggle);
  }
}
