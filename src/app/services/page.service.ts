import { Injectable, inject } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  private toastService = inject(ToastService);

  public showSuccessToast(body: string, delay = 3000): void {
    this.showToast('success', 'Success', body, delay);
  }

  public showErrorToast(body: string, delay = 3000): void {
    this.showToast('danger', 'Error', body, delay);
  }

  public showInfoToast(body: string, delay = 3000): void {
    this.showToast('info', 'Info', body, delay);
  }

  public showWarningToast(body: string, delay = 3000): void {
    this.showToast('warning', 'Warning', body, delay);
  }

  public showToast(
    messageType: 'success' | 'error' | 'info' | 'warning' | 'danger',
    title: string,
    body: string,
    delay = 3000
  ): void {
    if (messageType === 'error') {
      messageType = 'danger';
    }
    const message = `<h5>${title}</h5><p>${body}</p>`;
    const toastClass = `text-bg-${messageType}`;
    this.toastService.show(message, {
      classname: toastClass,
      delay,
    });
  }
}
