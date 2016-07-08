import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite.component';
import { LikeComponent } from './like.component';
import { VoterComponent } from './voter.component';

import { TweetComponent } from './tweet/tweet.component';
import { TweetService } from './tweet/tweet.service';

import { SummaryPipe } from './pipe/summary.pipe';

import { ZippyComponent } from './zippy/zippy.component';

@Component({
    selector: 'my-app',
    template: `

<!-- LikeComponent -->              
                <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
      
<!-- Chapter 40 : Code Review -->
                <voter 
                    [voteCount]="post.voteCount"
                    [myVote]="post.myVote"
                    (vote)="onVote($event)">
                </voter>
                
<!-- Chapter 45 : ngSwitch -->
                <h4> Chapter 45 : ngSwitch </h4>
                    <ul class="nav nav-pills">
                        <li [class.active]="viewMode =='Chapter41'">
                            <a (click)="viewMode = 'Chapter41'">Chapter 41 : Code Review</a>
                        </li>
                        <li [class.active]="viewMode =='Chapter50'">
                            <a (click)="viewMode = 'Chapter50'">Chapter 50 - 53</a>
                        </li>
                        <li [class.active]="viewMode =='Chapter56'">
                            <a (click)="viewMode = 'Chapter56'">Chapter 56 : Zippy</a>
                        </li>
                    </ul>

                    <div [ngSwitch]="viewMode">
<!-- Chapter 41 : Code Review --> 
                        <template [ngSwitchWhen]="'Chapter41'" ngSwitchDefault>
                            <h4> Chapter 41 </h4>
                            <div *ngFor="#tweet of tweets">
                                <tweet [data]="tweet"></tweet>

                            </div>
                        </template>
                        <template [ngSwitchWhen]="'Chapter50'" ngSwitchDefault>
<!-- Chapter 50-53  -->
                            <favorite [isFavorite]="post.isFavorite" 
                                (change)="onFavoriteChange($event)"></favorite>
                        </template>
 <!-- Chapter 56 : Code Zippy  -->                        
                        <template [ngSwitchWhen]="'Chapter56'">           
                            <h4> Chapter 56 : Zippy </h4>
                            <zippy title="Who can see my stuff?">
                                conent of who can see my stuff
                            </zippy>
                            <zippy title="Who can contact me?">
                                Content of who can contact me
                            </zippy>
 <!--End - Chapter 56 : Code Zippy  -->                       
                        </template>
                    </div>
<!-- End - Chapter 45 : ngSwitch -->   

<!-- Chapter 49 : Creating Customer Pipes -->
                <h1> Chapter 49 : Creating Customer Pipes </h1>
                <div>
                    <h4>{{post.title}}</h4>
                    <br/>
                    {{post.body | summary:100 }}
                </div>



                
                `,
    // directives: [CoursesComponent, FavoriteComponent]
    directives: [FavoriteComponent,LikeComponent,VoterComponent,TweetComponent,ZippyComponent],
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

    //  Chapter 45 : ngSwitch
    viewMode='Chapter41';

}