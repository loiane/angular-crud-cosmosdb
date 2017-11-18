import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ContactsService } from '../services/contacts.service';
import { Contact } from './../models/contact';

@Injectable()
export class ContactResolver implements Resolve<Contact> {
  constructor(private contactsService: ContactsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Contact> {
    if (route.params != null && route.params.id != null) {
      return this.contactsService.loadById(route.params.id);
    }
    return of({
      _id: null,
      name: null,
      phone: null,
      email: null
    });
  }
}
