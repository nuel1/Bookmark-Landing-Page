import { Component } from '@angular/core';
import { Faq, iFaq } from 'src/app/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  faqs: Faq[] = [
    {
      question: 'What is Bookmark?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui et aliquamtenetur laudantium quae possimus magnam natus, temporibus voluptatemaspernatur explicabo quia dicta, at amet expedita quasi unde.',
      faqOpen: false,
    },
    {
      question: 'How can I request a new browser?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui et aliquamtenetur laudantium quae possimus magnam natus, temporibus voluptatemaspernatur explicabo quia dicta, at amet expedita quasi unde.',
      faqOpen: false,
    },
    {
      question: 'Is there a mobile app?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui et aliquamtenetur laudantium quae possimus magnam natus, temporibus voluptatemaspernatur explicabo quia dicta, at amet expedita quasi unde.',
      faqOpen: false,
    },
    {
      question: 'What about other Chromium browsers?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui et aliquamtenetur laudantium quae possimus magnam natus, temporibus voluptatemaspernatur explicabo quia dicta, at amet expedita quasi unde.',
      faqOpen: false,
    },
  ];
  toggleFaq(faq: iFaq) {}
}
