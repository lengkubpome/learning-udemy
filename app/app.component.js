System.register(['angular2/core', './favorite.component', './like.component', './voter.component', './tweet/tweet.component', './tweet/tweet.service'], function(exports_1, context_1) {
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
    var core_1, favorite_component_1, like_component_1, voter_component_1, tweet_component_1, tweet_service_1;
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
                        myVote: 0
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
                        template: "\n<!--\n                <favorite [isFavorite]=\"post.isFavorite\" \n                    (change)=\"onFavoriteChange($event)\"></favorite>\n                <br />               \n                <like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n                <br/>\n--?              \n<!-- Chapter 40 : Code Review -->\n                <voter \n                    [voteCount]=\"post.voteCount\"\n                    [myVote]=\"post.myVote\"\n                    (vote)=\"onVote($event)\">\n                </voter>\n<!-- Chapter 41 : Code Review -->\n                <h1> Chapter 41 </h1>\n                <div *ngFor=\"#tweet of tweets\">\n                    <tweet [data]=\"tweet\"></tweet>\n\n                </div>\n\n                ",
                        // directives: [CoursesComponent, FavoriteComponent]
                        directives: [favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent, tweet_component_1.TweetComponent],
                        providers: [tweet_service_1.TweetService]
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