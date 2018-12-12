import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageContact } from '../model/MessageContact';
import { MessageContactService } from '../service/message-contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  formContact: FormGroup;
  emailControl: FormControl;
  typeMessageControl: FormControl;
  titreControl: FormControl;
  messageControl: FormControl;

  validationMessage: string;

  constructor(fb: FormBuilder, private router: Router, private messageService: MessageContactService) {
    this.emailControl = fb.control('', [Validators.email, Validators.required]);
    this.typeMessageControl = fb.control('', Validators.required);
    this.titreControl = fb.control('', Validators.required);
    this.messageControl = fb.control('', Validators.required);

    this.formContact = fb.group({
      email: this.emailControl,
      typeMessage: this.typeMessageControl,
      titre: this.titreControl,
      message: this.messageControl,
    });
  }

  ngOnInit() {
  }

  saveMessage() {
    debugger;
    if (this.formContact.valid) {
      const message: MessageContact = new MessageContact()
      message.email = this.formContact.get("email").value
      message.typeDemande = this.formContact.get("typeMessage").value
      message.titreMessage = this.formContact.get("titre").value
      message.contenuMessage = this.formContact.get("message").value
      this.messageService.sendMessage(message).subscribe(
        _ => this.validationMessage = "Merci. Un de nos conseillers reviendra vers vous dans les prochains jours."
      );
    }
  }


}



