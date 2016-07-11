System.register(['angular2/core', './favorite.component', './like.component', './voter.component', './tweet/tweet.component', './tweet/tweet.service', './pipe/summary.pipe', './zippy/zippy.component', './form/contact-form.component', './form/signup-form.Component'], function(exports_1, context_1) {
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
    var core_1, favorite_component_1, like_component_1, voter_component_1, tweet_component_1, tweet_service_1, summary_pipe_1, zippy_component_1, contact_form_component_1, signup_form_Component_1;
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
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (signup_form_Component_1_1) {
                signup_form_Component_1 = signup_form_Component_1_1;
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
                    //  Chapter 45 : ngSwitch
                    this.viewMode = 'Chapter41';
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
                        template: "\n\n<!-- LikeComponent -->              \n                <like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n      \n<!-- Chapter 40 : Code Review -->\n                <voter \n                    [voteCount]=\"post.voteCount\"\n                    [myVote]=\"post.myVote\"\n                    (vote)=\"onVote($event)\">\n                </voter>\n                \n<!-- Chapter 45 : ngSwitch -->\n                <h4> Chapter 45 : ngSwitch </h4>\n                    <ul class=\"nav nav-pills\" [ngStyle]=\"{ cursor: 'pointer'}\">\n                        <li  [class.active]=\"viewMode =='Chapter41'\">\n                            <a (click)=\"viewMode = 'Chapter41'\">Chapter 41 : Code Review</a>\n                        </li>\n                        <li [class.active]=\"viewMode =='Chapter50'\">\n                            <a (click)=\"viewMode = 'Chapter50'\">Chapter 50 - 53</a>\n                        </li>\n                        <li [class.active]=\"viewMode =='Chapter56'\">\n                            <a (click)=\"viewMode = 'Chapter56'\">Chapter 56 : Zippy</a>\n                        </li>\n                        <li [class.active]=\"viewMode =='Chapter59'\">\n                            <a (click)=\"viewMode = 'Chapter59'\">Chapter 59 : Form Contact</a>\n                        </li>\n                        <li [class.active]=\"viewMode =='Chapter71'\">\n                            <a (click)=\"viewMode = 'Chapter71'\">Chapter 71 : Creating Controls Explicitly</a>\n                        </li>\n                    </ul>\n\n                    <div [ngSwitch]=\"viewMode\">\n<!-- Chapter 41 : Code Review --> \n                        <template [ngSwitchWhen]=\"'Chapter41'\" ngSwitchDefault>\n                            <h4> Chapter 41 </h4>\n                            <div *ngFor=\"#tweet of tweets\">\n                                <tweet [data]=\"tweet\"></tweet>\n\n                            </div>\n                        </template>\n                        <template [ngSwitchWhen]=\"'Chapter50'\" ngSwitchDefault>\n<!-- Chapter 50-53  -->\n                            <favorite [isFavorite]=\"post.isFavorite\" \n                                (change)=\"onFavoriteChange($event)\"></favorite>\n                        </template>\n <!-- Chapter 56 : Code Zippy  -->                        \n                        <template [ngSwitchWhen]=\"'Chapter56'\">           \n                            <h4> Chapter 56 : Zippy </h4>\n                            <zippy title=\"Who can see my stuff?\">\n                                conent of who can see my stuff\n                            </zippy>\n                            <zippy title=\"Who can contact me?\">\n                                Content of who can contact me\n                            </zippy>\n <!--End - Chapter 56 : Code Zippy  -->                       \n                        </template>\n<!-- Chapter 59  -->\n                        <template [ngSwitchWhen]=\"'Chapter59'\" ngSwitchDefault>\n                            <contact-form></contact-form>\n                        </template>\n<!-- Chapter 71  -->\n                        <template [ngSwitchWhen]=\"'Chapter71'\" ngSwitchDefault>\n                            <signup-form></signup-form>\n                        </template>\n                    </div>\n<!-- End - Chapter 45 : ngSwitch -->   \n\n<!-- Chapter 49 : Creating Customer Pipes -->\n                <h1> Chapter 49 : Creating Customer Pipes </h1>\n                <div>\n                    <h4>{{post.title}}</h4>\n                    <br/>\n                    {{post.body | summary:100 }}\n                </div>              \n                ",
                        // directives: [CoursesComponent, FavoriteComponent]
                        directives: [favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent,
                            tweet_component_1.TweetComponent, zippy_component_1.ZippyComponent, contact_form_component_1.ContactFormComponent,
                            signup_form_Component_1.SignUpFormComponent],
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