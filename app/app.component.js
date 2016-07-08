System.register(['angular2/core', './favorite.component', './like.component', './voter.component', './tweet/tweet.component', './tweet/tweet.service', './pipe/summary.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, favorite_component_1, like_component_1, voter_component_1, tweet_component_1, tweet_service_1, summary_pipe_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.post = {
                        // FavoriteComponent
                        title: "Title",
                        isFavorite: true,
                        //VoterComponent 
                        voteCount: 10,
                        myVote: 0,
                        // Pipe
                        body: "\n            We're really excited about the June release of VS Code. We've made some big changes to Extension management (dedicated Extensions View) and added Tabs (tabbed editor panes). Other new features include global Search and Replace, improved Drag and Drop and optional indentation guides. All of this along with enhancements to existing features like the Integrated Terminal and delivering a set of important bug fixes.\n        "
                    };
                    //  38 Code Review
                    this.tweet = {
                        totalLikes: 10,
                        iLike: false
                    };
                    this.tweets = tweetService.getTweet();
                }
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n            \n<!-- Chapter 40 : Code Review -->\n                <voter \n                    [voteCount]=\"post.voteCount\"\n                    [myVote]=\"post.myVote\"\n                    (vote)=\"onVote($event)\">\n                </voter>\n<!-- Chapter 41 : Code Review -->\n                <h1> Chapter 41 </h1>\n                <div *ngFor=\"#tweet of tweets\">\n                    <tweet [data]=\"tweet\"></tweet>\n\n                </div>\n<!-- Chapter 49 : Creating Customer Pipes -->\n                <h1> Chapter 49 : Creating Customer Pipes </h1>\n                <div>\n                    <h4>{{post.title}}</h4>\n                    <br/>\n                    {{post.body | summary:100 }}\n                </div>\n<!-- Chapter 50-53  -->\n                <favorite [isFavorite]=\"post.isFavorite\" \n                    (change)=\"onFavoriteChange($event)\"></favorite>\n                ",
                        // directives: [CoursesComponent, FavoriteComponent]
                        directives: [favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent, tweet_component_1.TweetComponent],
                        providers: [tweet_service_1.TweetService],
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map