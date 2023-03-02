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
      faqOpened: false,
    },
    {
      question: 'How can I request a new browser?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui et aliquamtenetur laudantium quae possimus magnam natus, temporibus voluptatemaspernatur explicabo quia dicta, at amet expedita quasi unde.',
      faqOpened: false,
    },
    {
      question: 'Is there a mobile app?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui et aliquamtenetur laudantium quae possimus magnam natus, temporibus voluptatemaspernatur explicabo quia dicta, at amet expedita quasi unde.',
      faqOpened: false,
    },
    {
      question: 'What about other Chromium browsers?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui et aliquamtenetur laudantium quae possimus magnam natus, temporibus voluptatemaspernatur explicabo quia dicta, at amet expedita quasi unde.',
      faqOpened: false,
    },
  ];

  closeOpenedFaq(faq: iFaq) {
    const openedFaq = this.faqs.filter(
      (obj: iFaq) => obj !== faq && obj.faqOpened === true
    );

    if (openedFaq[0]) openedFaq[0].faqOpened = false;
  }
  toggleFaq(faq: iFaq) {
    this.closeOpenedFaq(faq);
    faq.faqOpened = !faq.faqOpened;
  }
}
