import { Component} from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { UsernameValidators } from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/form/signup-form.component.html'
})
export class SignUpFormComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            //username:['Default Validator','sync Validators', 'Async Validators']
            username:['', Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace
            ]),UsernameValidators.shouldBeUnique]
            ,
            password:['',Validators.required]
        });
    }

    // form = new ControlGroup({
    //     username: new Control('',Validators.required),
    //     password: new Control('',Validators.required)
    // });

    signup(){
        // var result = authService.login(this.form.value);
        this.form.find('username').setErrors({
            invalidLogin: true
        });

        console.log(this.form.value);
    }
    
}