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
<!-- FavoriteComponent -->
                <favorite [isFavorite]="post.isFavorite" 
                    (change)="onFavoriteChange($event)"></favorite>
<!-- LikeComponent -->              
                <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
                <br/>
            
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
<!-- Chapter 45 : ngSwitch -->
                <h1> Chapter 45 : ngSwitch </h1>

                    <ul class="nav nav-pills">
                        <li [class.active]="viewMode =='map'">
                            <a (click)="viewMode = 'map'">Map View</a>
                        </li>
                        <li [class.active]="viewMode =='list'">
                            <a (click)="viewMode = 'list'">List View</a>
                        </li>
                    </ul>
                    <div [ngSwitch]="viewMode">
                        <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
                        <template [ngSwitchWhen]="'list'">List View Content</template>
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

    //  Chapter 45 : ngSwitch
    viewMode='map';

}