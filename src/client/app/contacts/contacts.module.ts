import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactsContainerComponent } from './contacts-container/contacts-container.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactResolver } from './guards/contact.resolver';
import { ContactsService } from './services/contacts.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ContactsRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [
    ContactsContainerComponent,
    ContactListComponent,
    ContactFormComponent,
    ContactDetailsComponent
  ],
  entryComponents: [ContactDetailsComponent],
  providers: [ContactsService, ContactResolver]
})
export class ContactsModule {}
