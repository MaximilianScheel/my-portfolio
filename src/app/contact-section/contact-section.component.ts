import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton')sendButton!: ElementRef;
  @ViewChild('emailField')emailField!: ElementRef;
  @ViewChild('numberField')numberField!: ElementRef;
  @ViewChild('emailSubjectField')emailSubjectField!: ElementRef;

  messageSent: boolean = false;

  async sendMail() {
    //action="https://maximilian-scheel.developerakademie.net/send_mail/send_mail.php"
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let numberField = this.numberField.nativeElement;
    let emailSubjectField = this.emailSubjectField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    messageField.disabled = true;
    emailField.disabled = true;
    numberField.disabled = true;
    emailSubjectField.disabled = true;
    sendButton.disabled = true;

    //Animation


    let formData = new FormData(this.myForm.nativeElement);
    formData.append('name', nameField.value);
    formData.append('message', messageField.value);
    formData.append('email', emailField.value);
    formData.append('number', numberField.value);
    formData.append('emailSubject', emailSubjectField.value);


    await fetch('https://maximilian-scheel.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: formData
      }
    ),

    this.messageSent = true;

    nameField.value = '';
    messageField.value = '';
    emailField.value = '';
    numberField.value = '';
    emailSubjectField.value = '';

    // Nachricht gesendet



    setTimeout(() => {
      this.messageSent = false;
      
      nameField.disabled = false;
      messageField.disabled = false;
      emailField.disabled = false;
      numberField.disabled = false;
      emailSubjectField.disabled = false;
      sendButton.disabled = false;
    }, 3000);
  }
}
