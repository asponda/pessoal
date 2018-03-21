import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onFormSubmit() {

    if (!this.contactForm.valid) {
      return;
    }

    const formModel = this.contactForm.value;
    const contact: Contact = {
      name: formModel.name,
      email: formModel.email,
      subject: formModel.subject,
      message: formModel.message
    };

    this.contactService.send(contact).subscribe(
      (data) => {
        this.clearForm();
      },
      (error) => {

      }
    );

  }

  onClearClick() {
    this.clearForm();
  }

  clearForm() {
    this.contactForm.reset();
  }

  isValid(formField: string) {
    return !this.contactForm.get(formField).valid && this.contactForm.get(formField).touched;
  }

}
