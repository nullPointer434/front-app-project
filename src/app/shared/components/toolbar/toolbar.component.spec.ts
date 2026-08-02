import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ToolbarComponent } from './toolbar.component';

describe('@ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('#should emit toggle event', () => {
    const toggleSpy = vi.spyOn(component.toggle, 'emit');

    component.onToggleButton();

    expect(toggleSpy).toHaveBeenCalledTimes(1);
  });

  it('#should emit first action event', () => {
    const firstActionSpy = vi.spyOn(component.firstAction, 'emit');

    component.onFirstAction();

    expect(firstActionSpy).toHaveBeenCalledTimes(1);
  });

  it('#should emit second action event', () => {
    const secondActionSpy = vi.spyOn(component.secondAction, 'emit');

    component.onSecondAction();

    expect(secondActionSpy).toHaveBeenCalledTimes(1);
  });
});
