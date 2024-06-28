import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { MetaModel } from '../models/meta.model';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private title: Title = inject(Title);
  private meta: Meta = inject(Meta);

  updateMeta(model: MetaModel): void {
    const pageTitle = this.title.getTitle();
    this.meta.updateTag({
      name: 'og:title',
      content: pageTitle,
    });
    this.meta.updateTag({
      name: 'og:url',
      content: `${environment.baseUrl}${model.slug}`,
    });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({
      name: 'twitter:description',
      content: model.description,
    });
    this.meta.updateTag({ name: 'description', content: model.description });
  }
}
