import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formSubmitted:boolean = false;
  contactForm!: FormGroup<any>;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      message:['', Validators.required]
    })
  }
  // Accessors for form controls in your template
  get email() { return this.contactForm?.get('email'); }
  get name() { return this.contactForm?.get('name'); }
  get message() { return this.contactForm?.get('message'); }
  closeDialog(){
   
    this.contactForm.reset()
  }
  submit(){
    if(!this.formSubmitted){
      if (this.contactForm.valid) {
        // Form is valid, proceed with submission
       
        this.formSubmitted=true;
        console.log(this.contactForm.value);
      } else {
        // Form is invalid, mark controls as touched to display errors
        this.contactForm.markAllAsTouched();
      }
    }
  }

}
