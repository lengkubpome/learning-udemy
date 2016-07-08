System.register(['angular2/core', './auto-grow.directive'], function(exports_1, context_1) {
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
    var core_1, auto_grow_directive_1;
    var FavoriteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            FavoriteComponent = (function () {
                function FavoriteComponent() {
                    // @Input('is-favorite') isFavorite = false;
                    this.isFavorite = false;
                    this.change = new core_1.EventEmitter();
                    this.canSave = true;
                    this.task = {
                        title: "Review applications",
                        assignee: {
                            name: "er"
                        }
                    };
                }
                FavoriteComponent.prototype.onClick = function () {
                    this.isFavorite = !this.isFavorite;
                    this.change.emit({ newValue: this.isFavorite });
                };
                FavoriteComponent.prototype.onSubmit = function () {
                    this.canSave = !this.canSave;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FavoriteComponent.prototype, "isFavorite", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FavoriteComponent.prototype, "change", void 0);
                FavoriteComponent = __decorate([
                    core_1.Component({
                        selector: 'favorite',
                        template: "\n        <h4>Chapter 50 : ngClass</h4>\n        <i \n            class=\"glyphicon\" \n            [ngClass]=\"{\n                'glyphicon-star-empty': !isFavorite,\n                'glyphicon-star': isFavorite\n            }\"\n            (click)=\"onClick()\">\n        </i>\n        <h4>Chapter 51 : ngStyle</h4>\n        <button\n            [ngStyle]=\"{\n                backgroundColor: canSave ? 'blue':'gray',\n                color: canSave ? 'White': 'black',\n                fontWeight: canSave ? 'bold': 'normal'\n            }\"\n            (click)=\"onSubmit()\"\n        >Submit</button>\n        <h4>Chapter 52 : Elvis Operator</h4>\n        <ul>\n            <li>Title: {{ task.title}}</li>\n            <li>Assignee to: {{task.assignee?.role?.name}}</li>\n        </ul>\n        \n    ",
                        templateUrl: 'app/favorite.template.html',
                        styles: ["\n        .glyphicon-star {\n            color: orange;\n        }\n    "],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavoriteComponent);
                return FavoriteComponent;
            }());
            exports_1("FavoriteComponent", FavoriteComponent);
        }
    }
});
//# sourceMappingURL=favorite.component.js.map