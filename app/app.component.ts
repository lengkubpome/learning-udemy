import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
                <courses></courses>
                <authors></authors>
                <br/>
                <br/>
                <div (click)="onDivClick()">
                    <button (click)="onClick($event)">Submit</button>
                </div>
                `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { 
    onDivClick(){
        console.log("Handled by Div")
    }
    onClick($event){
        $event.stopPropagation();
        console.log("clicked", $event);
    }
}