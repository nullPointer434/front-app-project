import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToolbarComponent } from '@shared/components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { ShellPresenter } from './presenter/shell.presenter';
import { SidenavComponent } from '@shared/components/sidenav/sidenav.component';

@Component({
  selector: 'app-shell',
  imports: [CommonModule, RouterModule, ToolbarComponent, SidenavComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  providers: [ShellPresenter]
})
export class ShellComponent {
  constructor(public presenter: ShellPresenter) { }
}
