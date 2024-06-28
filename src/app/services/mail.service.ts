import { Injectable } from '@angular/core';
import { ContactModel } from '../models/contact-model';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor() { }

  sendMail(model: ContactModel) {

  }
}
