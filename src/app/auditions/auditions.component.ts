import { Component } from '@angular/core';
import { Faqitem } from '../models/faqitem';

@Component({
  selector: 'app-auditions',
  templateUrl: './auditions.component.html',
  styleUrls: ['./auditions.component.css']
})



export class AuditionsComponent {
  plusIcon: string = "M13.5 22.5H16.5V16.5H22.5V13.5H16.5V7.5H13.5V13.5H7.5V16.5H13.5V22.5ZM15 30C12.925 30 10.975 29.6063 9.15 28.8188C7.325 28.0313 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.96875 22.675 1.18125 20.85C0.39375 19.025 0 17.075 0 15C0 12.925 0.39375 10.975 1.18125 9.15C1.96875 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.96875 9.15 1.18125C10.975 0.39375 12.925 0 15 0C17.075 0 19.025 0.39375 20.85 1.18125C22.675 1.96875 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.0313 7.325 28.8188 9.15C29.6063 10.975 30 12.925 30 15C30 17.075 29.6063 19.025 28.8188 20.85C28.0313 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.0313 20.85 28.8188C19.025 29.6063 17.075 30 15 30ZM15 27C18.35 27 21.1875 25.8375 23.5125 23.5125C25.8375 21.1875 27 18.35 27 15C27 11.65 25.8375 8.8125 23.5125 6.4875C21.1875 4.1625 18.35 3 15 3C11.65 3 8.8125 4.1625 6.4875 6.4875C4.1625 8.8125 3 11.65 3 15C3 18.35 4.1625 21.1875 6.4875 23.5125C8.8125 25.8375 11.65 27 15 27Z"
  expandedIcon: string = "M7.5 16.5H22.5V13.5H7.5V16.5ZM15 30C12.925 30 10.975 29.6063 9.15 28.8188C7.325 28.0313 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.96875 22.675 1.18125 20.85C0.39375 19.025 0 17.075 0 15C0 12.925 0.39375 10.975 1.18125 9.15C1.96875 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.96875 9.15 1.18125C10.975 0.39375 12.925 0 15 0C17.075 0 19.025 0.39375 20.85 1.18125C22.675 1.96875 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.0313 7.325 28.8188 9.15C29.6063 10.975 30 12.925 30 15C30 17.075 29.6063 19.025 28.8188 20.85C28.0313 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.0313 20.85 28.8188C19.025 29.6063 17.075 30 15 30ZM15 27C18.35 27 21.1875 25.8375 23.5125 23.5125C25.8375 21.1875 27 18.35 27 15C27 11.65 25.8375 8.8125 23.5125 6.4875C21.1875 4.1625 18.35 3 15 3C11.65 3 8.8125 4.1625 6.4875 6.4875C4.1625 8.8125 3 11.65 3 15C3 18.35 4.1625 21.1875 6.4875 23.5125C8.8125 25.8375 11.65 27 15 27Z"
  faqData: {question: string, answer: string, expanded: boolean}[] = [
    {
      question: 'What is the audition process?',
      answer: "Don't fret! We will guide you through the audition process! After signing up for your reserved audition time slot, make sure to note the time and location on campus. When you arrive at your assigned room, some of the Tritones will chat with you and answer any last questions. Once you have been checked in, you are welcome into the audition room, where we will run through some provided singing and rhythm exercises. When it is time to sing your 60 second solo for us, we will ask if we may record it for reference later. If the audition panel request to hear more, you may be asked to sing the Star Spangled Banner (U.S. National Anthem). After that we will give you additional callbacks details and then you are free to go - thank you for taking the time to audition!",
      expanded: false,
    },
    {
      question: 'How does AcaRush at UC San Diego work?',
      answer: "A Cappella Recruitment at UC San Diego commences on the same week of A Capella Wants You. During this a cappella extravaganza all eight groups at UCSD will perform 2 songs. Post-concert you will be able to meet with representatives from each group and get a feel of what it's like to be in a cappella group! Afterward, sign up for audition slots for as many groups as you want. Auditions are September 22nd - September 29th, callbacks are Sunday morning October 2nd 9:00am-12:00pm. Callback times are coordinated among all a cappella groups, so you will NEVER have to worry about missing a callback because of another group's audition/callback. AUDITIONEES will be notified of acceptance by ALL groups between 6-9pm on the Monday (October 3rd) following callbacks.",
      expanded: false,
    },
    {
      question: 'How many people will you be taking? Is it hard to get in?',
      answer: "It's complicated. The UCSD Tritones does not have a set number of members. We like to average around 14-16 members at once, but we've had as little as 11 members, to as much as 20. Generally, if you audition for us, and we feel that you are fully qualified to be in the group, we would love to have you on board. With that being said, earning a spot in any of UC San Diego's a cappella groups is extremely competitive. All groups participate in the same recruitment process. This is not to say that you have to be a musical genius or be the next American Idol! Everyone should audition, because you never know what we're looking for in any particular year!",
      expanded: false,
    },
    {
      question: 'What song should I choose for my audition?',
      answer: "Something fitting. Please audition with any song that will highlight your capabilities as a soloist. Although we appreciate all genres of music, we do recommend auditioning with a contemporary pop, R&B, or jazz song since this is the style of music that the group typically performs. Regardless of genre, please choose a song that accentuates your range and stylistic abilities. If you have trouble choosing an audition song, please reference our YouTube channel for song ideas.",
      expanded: false,
    },
    {
      question: 'What makes someone stand out?',
      answer: "Your voice, your character, and your energy. In order to stand out during a cappella rush, it is important for the auditionee to have fun and be transparrent during the audition. At the same time that you perform for us, be yourself! We want you to communicate to us about your vocal talent and your personality.",
      expanded: false,
    },
    {
      question: 'Can I audition for more than one group?',
      answer: "YES! In fact, we recommend that you audition for every single group that you can possibly audition for in order to determine which group is the best fit for you. Since membership in an a cappella group spans a college career, it is of utmost importance that you decide if a group's 'vibe' is the right one for you.",
      expanded: false,
    },
  ]
  
  toggleAnswer(item: { question: string, answer: string, expanded: boolean }) {
    item.expanded = !item.expanded;
  }

  scrollToSection(sectionId: string): void {
    // remove active class from all tabs
    document.querySelectorAll('.tab-option').forEach(tab => {
      tab.classList.remove('active');
    });
  
    // add active class to the clicked tab
    document.querySelector(`.tab-option[click*="${sectionId}"]`)?.classList.add('active');

    const element = document.querySelector('#' + sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 200; // Adjust 200 to the desired offset
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
}

  
  
}

