import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extension-card',
  templateUrl: './extension-card.component.html',
  styleUrls: ['./extension-card.component.scss'],
})
export class ExtensionCardComponent {
  @Input() imgSrc = '';
  @Input() imgAlt = '';
  @Input() title = '';
  @Input() version = '';
}
