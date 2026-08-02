import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  toggleIcon = input<string>('');
  firstActionIcon = input<string>('');
  secondActionIcon = input<string>('');
  appName = input<string>('');

  toggle = output<void>();
  firstAction = output<void>();
  secondAction = output<void>();

  onToggleButton(): void {
    this.toggle.emit();
  }

  onFirstAction(): void {
    this.firstAction.emit();
  }

  onSecondAction(): void {
    this.secondAction.emit();
  }
}
