import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private message: MessageService) {}

  info(message?: string) {
    this.message.add({
      severity: 'info',
      summary: 'Message',
      detail: `${message}`,
    });
  }

  success(message?: string) {
    this.message.add({
      severity: 'success',
      summary: 'Message',
      detail: `${message}`,
    });
  }

  warning(message?: string) {
    this.message.add({
      severity: 'warn',
      summary: 'Message',
      detail: `${message}`,
    });
  }

  error(message?: string) {
    this.message.add({
      severity: 'error',
      summary: 'Message',
      detail: `${message}`,
    });
  }
}
