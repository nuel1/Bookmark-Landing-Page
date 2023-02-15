import { ArrayType } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extension-card',
  templateUrl: './extension-card.component.html',
  styleUrls: ['./extension-card.component.scss'],
})
export class ExtensionCardComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() title = '';
  @Input() version = '';

  iterationMeans = Array.from({ length: 18 });
}
