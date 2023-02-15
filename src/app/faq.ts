export interface iFaq {
  question: string;
  answer: string;
  faqOpen: boolean;
}
export class Faq implements iFaq {
  question = '';
  answer = '';
  faqOpen = false;
}
