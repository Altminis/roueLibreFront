import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.emailControl= fb.control('', [Validators.email, Validators.required]);
    this.typeMessageControl= fb.control('', Validators.required);
    this.titreControl= fb.control('', Validators.required);
    this.messageControl= fb.control('', Validators.required);

    this.formContact= fb.group({
      email: this.emailControl,
      typeMessage: this.typeMessageControl,
      titre: this.titreControl,
      message: this.messageControl,
    });
  }

  ngOnInit() {
  }

}
