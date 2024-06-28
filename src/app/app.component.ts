import { Component, inject } from '@angular/core';
import { AsyncPipe, DOCUMENT, ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, fromEvent, map } from 'rxjs';
import { LoaderService } from './services/loader.service';
import { ToastsContainer } from './helpers/toast';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ScrollToTopComponent,
    ToastsContainer,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);
  private readonly viewport = inject(ViewportScroller);
  public loaderService = inject(LoaderService);
  readonly showScroll$: Observable<boolean> = fromEvent(
    this.document,
    'scroll'
  ).pipe(map(() => this.viewport.getScrollPosition()?.[1] > 0));

  onScrollToTop(): void {
    this.viewport.scrollToPosition([0, 0]);
  }
}
