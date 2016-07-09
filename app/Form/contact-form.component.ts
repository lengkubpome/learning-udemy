import { Component } from 'angular2/core';

@Component({
    selector: 'contact-form',
    templateUrl: `app/form/contact-form.component.html`

})

export class ContactFormComponent {
    frequencies = [
        { id: 1, label: 'Daily' },
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ]

    log(x) {
        console.log(x)
    }

    onSubmit(form) {
        console.log(form.value);
    }
}