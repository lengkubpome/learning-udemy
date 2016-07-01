import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite.component';

@Component({
    selector: 'my-app',
    template: `
                <favorite [isFavorite]="post.isFavorite" 
                    (change)="onFavoriteChange($event)"></favorite>
                `,
    // directives: [CoursesComponent, FavoriteComponent]
    directives: [FavoriteComponent]

})
export class AppComponent { 
    post = {
        title:"Title",
        isFavorite: true
    }

    onFavoriteChange($event){
        console.log($event);
    }
}