import { SidenavComponent } from './sidenav.component';
import { AppNavigation } from '@shared/interfaces/app-navigation.interface';

describe('@SidenavComponent', () => {
  let component: SidenavComponent;

  beforeEach(() => {
    component = new SidenavComponent();
  });

  it('#should emit item for navigation when item is clicked', () => {
    const item: AppNavigation = {
      label: 'Home',
      icon: 'fa-solid fa-house',
      route: 'home'
    };

    const spy = spyOn(component.itemEmitter, 'emit');

    component.onRoute(item);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
