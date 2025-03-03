import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { appNavigation, appUser } from '@shared/constants/app-configuration.constant';
import { AppNavigation } from '@shared/interfaces/app-navigation.interface';
import { AppUser } from '@shared/interfaces/app-user.interface';

@Injectable({
  providedIn: 'root'
})
export class ShellPresenter {
  appName: string = 'front-app-project';
  appUser: AppUser = appUser;
  exitAppLabel: string = 'Salir';
  top: string = '60';
  appNavigation: AppNavigation[] = appNavigation;
  isSidenavOpen: boolean = true;

  constructor(
    private router: Router
  ) { }

  listenSignOutEmitter(): void {
    console.log('listen sign out emitter from presenter');
  }

  listenToggleEmitter(toggle: boolean): void {
    this.isSidenavOpen = toggle;
  }

  listenItemEmitter(item: AppNavigation): void {
    this.router.navigateByUrl(item.route);
  }
}
