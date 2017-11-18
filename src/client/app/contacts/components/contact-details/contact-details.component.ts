import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { Contact } from './../../models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactDetailsComponent {

  @Input() contact: Contact;
  @Output() onEdit = new EventEmitter<Contact>();
  @Output() onDelete = new EventEmitter<Contact>();

}
