import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MemberService } from '../services/members.service';
import { Member, VoicePart } from '../models/member';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  @ViewChild('navButtonGroup', { static: false }) navButtonGroup?: ElementRef<HTMLElement>;

  members: Member[] = [];
  sopranos: Member[] = [];
  mezzos: Member[] = [];
  altos: Member[] = [];
  tenors: Member[] = [];
  baritones: Member[] = [];
  bass: Member[] = [];

  voicePartGroups: { [key: string]: any[] } = {};
  selectedMember: Member | null = null;
  stickyHeaderOffset = 80;
  showStickyNav = false;

  private readonly scrollClearance = 16;

  constructor(
    private memberService: MemberService,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.checkScroll();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateStickyHeaderOffset();
    this.checkScroll();
  }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((data) => {
      this.members = data;
      this.sopranos = this.members.filter((member) => member.voicePart === VoicePart.SOPRANO);
      this.mezzos = this.members.filter((member) => member.voicePart === VoicePart.MEZZO);
      this.altos = this.members.filter((member) => member.voicePart === VoicePart.ALTO);
      this.tenors = this.members.filter((member) => member.voicePart === VoicePart.TENOR);
      this.baritones = this.members.filter((member) => member.voicePart === VoicePart.BARITONE);
      this.bass = this.members.filter((member) => member.voicePart === VoicePart.BASS);

      this.voicePartGroups = {
        sopranos: this.sopranos,
        mezzos: this.mezzos,
        altos: this.altos,
        tenors: this.tenors,
        baritones: this.baritones,
        bass: this.bass,
      };
    });
  }

  ngAfterViewInit(): void {
    this.updateStickyHeaderOffset();
    this.checkScroll();
  }

  get voicePartKeys(): string[] {
    return Object.keys(this.voicePartGroups);
  }

  getMembersByVoicePart(voicePart: string): any[] {
    return this.voicePartGroups[voicePart];
  }

  getDisplayName(voicePart: string): string {
    const displayNames: { [key: string]: string } = {
      sopranos: 'Sopranos',
      mezzos: 'Mezzos',
      altos: 'Altos',
      tenors: 'Tenors',
      baritones: 'Baritones',
      bass: 'Bass',
    };
    return displayNames[voicePart];
  }

  checkScroll(): void {
    if (!this.navButtonGroup) {
      return;
    }

    const navButtonGroupPosition = this.navButtonGroup.nativeElement.getBoundingClientRect();
    this.showStickyNav = navButtonGroupPosition.top <= this.stickyHeaderOffset;
  }

  scrollToSection(sectionId: string): void {
    const element = this.el.nativeElement.querySelector(`#${sectionId}`) as HTMLElement | null;

    if (!element) {
      return;
    }

    const yOffset = window.scrollY + element.getBoundingClientRect().top - this.getScrollOffset();
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
  }

  selectMember(member: Member): void {
    this.selectedMember = member;
  }

  deselectMember(): void {
    this.selectedMember = null;
  }

  private updateStickyHeaderOffset(): void {
    this.stickyHeaderOffset = this.getHeaderHeight();
  }

  private getHeaderHeight(): number {
    const headerElement = this.document.querySelector('header');
    return headerElement?.getBoundingClientRect().height ?? 80;
  }

  private getScrollOffset(): number {
    return this.getHeaderHeight() + this.getVoicePartNavHeight() + this.scrollClearance;
  }

  private getVoicePartNavHeight(): number {
    return this.navButtonGroup?.nativeElement.getBoundingClientRect().height ?? 0;
  }
}
