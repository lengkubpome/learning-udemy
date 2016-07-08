import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite.component';
import { LikeComponent } from './like.component';
import { VoterComponent } from './voter.component';

import { TweetComponent } from './tweet/tweet.component';
import { TweetService } from './tweet/tweet.service';

import { SummaryPipe } from './pipe/summary.pipe';

@Component({
    selector: 'my-app',
    template: `
            
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
<!-- Chapter 49 : Creating Customer Pipes -->
                <h1> Chapter 49 : Creating Customer Pipes </h1>
                <div>
                    <h4>{{post.title}}</h4>
                    <br/>
                    {{post.body | summary:100 }}
                </div>
<!-- Chapter 50-53  -->
                <favorite [isFavorite]="post.isFavorite" 
                    (change)="onFavoriteChange($event)"></favorite>
                `,
    // directives: [CoursesComponent, FavoriteComponent]
    directives: [FavoriteComponent,LikeComponent,VoterComponent,TweetComponent],
    providers: [TweetService],
    pipes: [SummaryPipe]

})
export class AppComponent {
    post = {
        // FavoriteComponent
        title: "Title",
        isFavorite: true,
        
        //VoterComponent 
        voteCount: 10,
        myVote:0,

        // Pipe
        body: `
            We're really excited about the June release of VS Code. We've made some big changes to Extension management (dedicated Extensions View) and added Tabs (tabbed editor panes). Other new features include global Search and Replace, improved Drag and Drop and optional indentation guides. All of this along with enhancements to existing features like the Integrated Terminal and delivering a set of important bug fixes.
        `
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