import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Observable } from 'rxjs/Observable';

import { ContactDetailsComponent } from '../components/contact-details/contact-details.component';
import { Contact } from './../models/contact';
import { ContactsService } from './../services/contacts.service';

@Component({
  selector: 'app-contacts-container',
  templateUrl: './contacts-container.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ContactsContainerComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  deleteModalRef: BsModalRef;
  deleteContactRef: Contact;
  @ViewChild('deleteModal') deleteModal;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.refreshList();
  }

  onShow(contact: Contact) {
    const bsModalRef: BsModalRef = this.modalService.show(
      ContactDetailsComponent
    );
    bsModalRef.content.contact = contact;
  }

  onEdit(contact: Contact) {
    this.router.navigate([contact._id], { relativeTo: this.route });
  }

  onDelete(contact: Contact) {
    this.deleteContactRef = contact;
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  onConfirmDelete() {
    this.contactsService.remove(this.deleteContactRef._id).subscribe(data => this.refreshList());
    this.deleteModalRef.hide();
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  refreshList() {
    this.contacts$ = this.contactsService.load();
  }
}
