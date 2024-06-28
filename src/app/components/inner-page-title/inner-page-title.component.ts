import { Component, input } from '@angular/core';

@Component({
  selector: 'app-inner-page-title',
  standalone: true,
  imports: [],
  templateUrl: './inner-page-title.component.html',
  styleUrl: './inner-page-title.component.scss',
})
export class InnerPageTitleComponent {
  pageTitle = input.required<string>();
}
