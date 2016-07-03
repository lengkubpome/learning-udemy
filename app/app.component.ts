import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite.component';
import { LikeComponent } from './like.component';

@Component({
    selector: 'my-app',
    template: `
                <favorite [isFavorite]="post.isFavorite" 
                    (change)="onFavoriteChange($event)"></favorite>
                <br />               
                <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
                `,
    // directives: [CoursesComponent, FavoriteComponent]
    directives: [FavoriteComponent,LikeComponent]

})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }

    onFavoriteChange($event) {
        console.log($event);
    }
    //  38 Code Review
    tweet = {
        totalLikes: 10,
        iLike: false
    }

}