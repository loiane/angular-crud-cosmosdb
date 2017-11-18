import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { Contact } from './../../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: [`.contact-row { animation: fadeIn 600ms }`],
  encapsulation: ViewEncapsulation.None
})
export class ContactListComponent {

  @Input() contacts: Contact[];
  @Output() onEdit = new EventEmitter<Contact>();
  @Output() onShow = new EventEmitter<Contact>();
  @Output() onDelete = new EventEmitter<Contact>();

  onShowDetails(contact: Contact) {
    this.onShow.emit(contact);
  }

  onEditContact(contact: Contact) {
    this.onEdit.emit(contact)
  }

  onDeleteContact(contact: Contact) {
    this.onDelete.emit(contact)
  }
}
