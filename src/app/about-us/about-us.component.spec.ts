import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { MemberService } from '../services/members.service';
import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;
  let headerElement: HTMLElement;

  const memberServiceStub = {
    getMembers: () => of([]),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsComponent],
      providers: [{ provide: MemberService, useValue: memberServiceStub }],
    });

    headerElement = document.createElement('header');
    document.body.appendChild(headerElement);
    spyOn(headerElement, 'getBoundingClientRect').and.returnValue({
      height: 80,
    } as DOMRect);

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    headerElement.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the sticky voice-part nav when the inline nav reaches the header boundary', () => {
    spyOn(component.navButtonGroup!.nativeElement, 'getBoundingClientRect').and.returnValue({
      top: 80,
      height: 64,
    } as DOMRect);

    component.checkScroll();

    expect(component.showStickyNav).toBeTrue();
  });

  it('hides the sticky voice-part nav while the inline nav is below the header boundary', () => {
    spyOn(component.navButtonGroup!.nativeElement, 'getBoundingClientRect').and.returnValue({
      top: 120,
      height: 64,
    } as DOMRect);

    component.checkScroll();

    expect(component.showStickyNav).toBeFalse();
  });

  it('scrolls sections using the measured header and nav offsets', () => {
    component.voicePartGroups = { sopranos: [] };
    fixture.detectChanges();

    spyOn(component.navButtonGroup!.nativeElement, 'getBoundingClientRect').and.returnValue({
      top: 140,
      height: 64,
    } as DOMRect);

    const section = fixture.nativeElement.querySelector('#sopranos') as HTMLElement;
    spyOn(section, 'getBoundingClientRect').and.returnValue({
      top: 500,
    } as DOMRect);
    spyOnProperty(window, 'scrollY', 'get').and.returnValue(200);
    const scrollToSpy = spyOn(window, 'scrollTo');

    component.scrollToSection('sopranos');

    expect(scrollToSpy).toHaveBeenCalled();
    const scrollOptions = scrollToSpy.calls.mostRecent().args[0] as ScrollToOptions;
    expect(scrollOptions.top).toBe(540);
    expect(scrollOptions.behavior).toBe('smooth');
  });
});
