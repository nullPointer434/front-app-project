import { ShellPresenter } from './presenter/shell.presenter';
import { ShellComponent } from './shell.component';

describe('@ShellComponent', () => {
  let component: ShellComponent;
  let stubShellPresenter: jasmine.SpyObj<ShellPresenter>;

  beforeEach(() => {
    stubShellPresenter = jasmine.createSpyObj<ShellPresenter>('ShellPresenter', ['listenSignOutEmitter', 'listenToggleEmitter', 'listenItemEmitter']);

    component = new ShellComponent(stubShellPresenter);
  });

  it('#should be created when the component is instantiated', () => {
    expect(component).toBeTruthy();
  });
});
