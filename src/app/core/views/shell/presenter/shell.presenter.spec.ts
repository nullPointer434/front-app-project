import { AppNavigation } from '@shared/interfaces/app-navigation.interface';
import { ShellPresenter } from './shell.presenter';
import { Router } from '@angular/router';

describe('@ShellPresenter', () => {
  let presenter: ShellPresenter;
  let stubRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    stubRouter = jasmine.createSpyObj<Router>('Router', ['navigateByUrl']);

    presenter = new ShellPresenter(stubRouter);
  });

  it('#should listen to the event when sign out is emited', () => {
    const spy = spyOn(console, 'log');

    presenter.listenSignOutEmitter();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('#should listen to the event when toggle is emited', () => {
    const toggle = false;

    presenter.listenToggleEmitter(toggle);

    expect(presenter.isSidenavOpen).toEqual(toggle);
  });

  it('#should listen to the event when item is emited', () => {
    const item: AppNavigation = {
      label: 'Home',
      icon: 'fa-solid fa-house',
      route: 'home'
    };

    const spy = stubRouter.navigateByUrl;

    presenter.listenItemEmitter(item);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
