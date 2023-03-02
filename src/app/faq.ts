export interface iFaq {
  question: string;
  answer: string;
  faqOpened: boolean;
}
export class Faq implements iFaq {
  question = '';
  answer = '';
  faqOpened = false;
}
