import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { take, tap } from 'rxjs/operators';

import { Contact } from './../models/contact';

@Injectable()
export class ContactsService {

  private readonly API = '/api/contacts';

  private contactsCache: Contact[];

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<Contact[]>(this.API)
      .pipe(
        take(1),
        tap(data => this.contactsCache = data)
      );
  }

  loadById(id: string) {
    if (this.contactsCache != null && this.contactsCache.length > 0) {
      const record = this.contactsCache.find(contact => contact._id === id);
      return record != null ? of(record) : this.getById(id);
    }
    return this.getById(id);
  }

  private getById(id: string) {
    return this.http.get<Contact>(`${this.API}/${id}`).pipe(take(1));
  }

  save(record: Contact) {
    if (record._id != null) {
      return this.update(record);
    }
    return this.create(record);
  }

  create(record: Contact) {
    return this.http.post<Contact>(this.API, record).pipe(take(1));
  }

  update(record: Contact) {
    return this.http.put<Contact>(`${this.API}/${record._id}`, record).pipe(take(1));
  }

  remove(id: string) {
    return this.http.delete<Contact>(`${this.API}/${id}`).pipe(take(1));
  }
}
