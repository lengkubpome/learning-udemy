import { Component, Input, Output, EventEmitter} from 'angular2/core';
import { AutoGrowDirective } from './auto-grow.directive';

@Component({
    selector: 'favorite',
    template : `
        <h4>Chapter 50 : ngClass</h4>
        <i 
            class="glyphicon" 
            [ngClass]="{
                'glyphicon-star-empty': !isFavorite,
                'glyphicon-star': isFavorite
            }"
            (click)="onClick()">
        </i>
        <h4>Chapter 51 : ngStyle</h4>
        <button
            [ngStyle]="{
                backgroundColor: canSave ? 'blue':'gray',
                color: canSave ? 'White': 'black',
                fontWeight: canSave ? 'bold': 'normal'
            }"
            (click)="onSubmit()"
        >Submit</button>
        <h4>Chapter 52 : Elvis Operator</h4>
        <ul>
            <li>Title: {{ task.title}}</li>
            <li>Assignee to: {{task.assignee?.role?.name}}</li>
        </ul>
        
    ` ,
    templateUrl: 'app/favorite.template.html',
    styles:[`
        .glyphicon-star {
            color: orange;
        }
    `],
    directives: [AutoGrowDirective]
    //  inputs: ['isFavorite:is-favorite'],
    
   
})

export class FavoriteComponent {
    // @Input('is-favorite') isFavorite = false;
    @Input() isFavorite = false;
    @Output() change = new EventEmitter();

    canSave = true;

    task ={
        title: "Review applications",
        assignee: {
            name: "er"
        }
    }

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite })
    }
    onSubmit(){
        this.canSave = !this.canSave;
    }
}

