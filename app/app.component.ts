import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite.component';
import { LikeComponent } from './like.component';
import { VoterComponent } from './voter.component';

import { TweetComponent } from './tweet/tweet.component';
import { TweetService } from './tweet/tweet.service';

@Component({
    selector: 'my-app',
    template: `
<!--
                <favorite [isFavorite]="post.isFavorite" 
                    (change)="onFavoriteChange($event)"></favorite>
                <br />               
                <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
                <br/>
--?              
<!-- Chapter 40 : Code Review -->
                <voter 
                    [voteCount]="post.voteCount"
                    [myVote]="post.myVote"
                    (vote)="onVote($event)">
                </voter>
<!-- Chapter 41 : Code Review -->
                <h1> Chapter 41 </h1>
                <div *ngFor="#tweet of tweets">
                    <tweet [data]="tweet"></tweet>

                </div>

                `,
    // directives: [CoursesComponent, FavoriteComponent]
    directives: [FavoriteComponent,LikeComponent,VoterComponent,TweetComponent],
    providers: [TweetService]

})
export class AppComponent {
    post = {
        // FavoriteComponent
        title: "Title",
        isFavorite: true,
        
        //VoterComponent 
        voteCount: 10,
        myVote:0
    }
    onVote($event){
        console.log($event);
    }

    onFavoriteChange($event) {
        console.log($event);
    }
    //  38 Code Review
    tweet = {
        totalLikes: 10,
        iLike: false
    }

    // Chapter 41
    tweets: any[];
    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweet();
    }



}