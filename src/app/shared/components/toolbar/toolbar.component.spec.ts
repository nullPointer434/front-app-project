import { ToolbarComponent } from './toolbar.component';

describe('@ToolbarComponent', () => {
  let component: ToolbarComponent;

  beforeEach(() => {
    component = new ToolbarComponent();
  });

  it('#should emit sign out when link is clicked', () => {
    const spy = spyOn(component.signOutEmitter, 'emit');

    component.onSignOut();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('#should emit toggle when link menu button is clicked', () => {
    const spy = spyOn(component.toggleEmitter, 'emit');

    component.onToggle();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
