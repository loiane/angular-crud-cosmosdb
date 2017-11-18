import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactsContainerComponent } from './contacts-container/contacts-container.component';
import { ContactResolver } from './guards/contact.resolver';

const routes: Routes = [
  { path: '', component: ContactsContainerComponent },
  {
    path: 'new',
    component: ContactFormComponent,
    resolve: {
      contact: ContactResolver
    }
  },
  {
    path: ':id',
    component: ContactFormComponent,
    resolve: {
      contact: ContactResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {}
