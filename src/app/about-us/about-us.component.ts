import { Component, OnInit,Renderer2,ElementRef,ViewChild, AfterViewInit ,HostListener} from '@angular/core';
import { MemberService } from '../services/members.service';
import { Member } from '../models/member';
import { VoicePart } from '../models/member';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: any) {
    this.checkScroll();
  }

  @ViewChild('navButtonGroup', { static: false }) navButtonGroup!: ElementRef;
  @ViewChild('topButtonGroup', { static: false }) topButtonGroup!: ElementRef;


  checkScroll() {
    const navButtonGroupPosition = this.navButtonGroup.nativeElement.getBoundingClientRect();
    const topButtonGroupPosition = this.topButtonGroup.nativeElement.getBoundingClientRect();
    if (navButtonGroupPosition.top <= -20) {
      this.renderer.setStyle(this.topButtonGroup.nativeElement, 'display', 'flex');  // This line is changed
    } else {
      this.renderer.setStyle(this.topButtonGroup.nativeElement, 'display', 'none');  // This line is changed
    }
  }
  

  
  members: Member[] = [];
  sopranos: Member[] = [];
  mezzos: Member[] = [];    
  altos: Member[] = []; 
  tenors: Member[] = []; 
  baritones: Member[] = [];
  bass:Member[] = [];


  voicePartGroups: { [key: string]: any[] } = {};
  selectedMember: Member | null = null;

  constructor(private memberService: MemberService, private el: ElementRef, private renderer: Renderer2) {}


  ngOnInit(): void {
    this.memberService.getMembers().subscribe((data) => {
      this.members = data;
      this.sopranos = this.members.filter(member => member.voicePart === VoicePart.SOPRANO);
      this.mezzos = this.members.filter(member => member.voicePart === VoicePart.MEZZO);
      this.altos = this.members.filter(member => member.voicePart === VoicePart.ALTO);
      this.tenors = this.members.filter(member => member.voicePart === VoicePart.TENOR);
      this.baritones = this.members.filter(member => member.voicePart === VoicePart.BARITONE);
      this.bass = this.members.filter(member =>member.voicePart === VoicePart.BASS);
      console.log(this.bass);

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
      bass: 'Bass'
    };
    return displayNames[voicePart];
  }
  

  scrollToSection(sectionId: string): void {
    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    const headerHeight = 350; // adjust this value to match your actual header or navigation height
    const yOffset = window.scrollY + element.getBoundingClientRect().top - headerHeight;
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
  }
  


  selectMember(member:Member) {
      this.selectedMember = member;
  }

  deselectMember() {
      this.selectedMember = null;
  }

}


