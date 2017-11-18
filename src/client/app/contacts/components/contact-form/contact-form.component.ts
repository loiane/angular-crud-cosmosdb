import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactFormComponent implements OnInit {

  private formSumitAttempt = false;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {

    const contact = this.route.snapshot.data['contact'];

    this.form = this.formBuilder.group({
      _id: [contact._id],
      name: [contact.name, Validators.required],
      email: [contact.email, Validators.required],
      phone: [contact.phone]
    })
  }

  isFieldValid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSumitAttempt === true)
    );
  }

  displayFormGroupCss(field: string) {
    return {
      'is-invalid': this.isFieldValid(field)
    };
  }

  onSubmit() {
    this.formSumitAttempt = true;
    if (this.form.valid) {
      this.contactsService.save(this.form.value).subscribe(data => this.onCancel());
    }
  }

  onCancel() {
    this.formSumitAttempt = false;
    this.location.back();
  }

}
