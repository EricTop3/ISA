!function(){"use strict";angular.module("nodeInAction",["ui.router","ngMaterial","toastr"])}(),function(){"use strict";function t(){function t(t){var n=this;n.relativeDate=t(n.creationDate).fromNow()}t.$inject=["moment"];var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return n}angular.module("nodeInAction").directive("acmeNavbar",t)}(),function(){"use strict";function t(){function t(){return n}var n=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"}];this.getTec=t}angular.module("nodeInAction").service("webDevTec",t)}(),function(){"use strict";function t(t,n){function e(e){function a(t){return t.data}function r(n){t.error("XHR Failed for getContributors.\n"+angular.toJson(n.data,!0))}return e||(e=30),n.get(o+"/contributors?per_page="+e).then(a)["catch"](r)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:o,getContributors:e};return a}t.$inject=["$log","$http"],angular.module("nodeInAction").factory("githubContributor",t)}(),function(){"use strict";function t(t){function n(n,e,o,a){var r,i=t(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(n.extraValues,function(t){i.type(t).pause()["delete"]()}),r=n.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){i.type(t.login).pause()["delete"]()})}),n.$on("$destroy",function(){r()})}function e(t,n){function e(){return o().then(function(){t.info("Activated Contributors View")})}function o(){return n.getContributors(10).then(function(t){return a.contributors=t,a.contributors})}var a=this;a.contributors=[],e()}e.$inject=["$log","githubContributor"];var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:n,controller:e,controllerAs:"vm"};return o}t.$inject=["malarkey"],angular.module("nodeInAction").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,n,e){function o(){r(),t(function(){i.classAnimation="rubberBand"},4e3)}function a(){e.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function r(){i.awesomeThings=n.getTec(),angular.forEach(i.awesomeThings,function(t){t.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1469542784322,i.showToastr=a,o()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("nodeInAction").controller("MainController",t)}(),angular.module("nodeInAction").config(["$stateProvider",function(t){t.state("login",{url:"/login",templateUrl:"app/account/login.html",controllerAs:"vm",controller:["$http",function(t){var n=this;n.login=function(){t.post("http://localhost:1994/login",n.user).then(function(t){console.log(t)})},n.query=function(){t.get("http://localhost:1994/account").then(function(t){console.log(t)})}}]})}]),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("nodeInAction").run(t)}(),function(){"use strict";function t(t,n){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),n.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("nodeInAction").config(t)}(),function(){"use strict";angular.module("nodeInAction").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,n){t.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("nodeInAction").config(t)}(),angular.module("nodeInAction").run(["$templateCache",function(t){t.put("app/account/login.html",'<div layout><div flex=25></div><div flex=50><h3>login</h3><md-input-container class="md-icon-float md-block"><label>Name</label><input ng-model=vm.user.username type=text></md-input-container><md-input-container class=md-block><input ng-model=vm.user.password type=text placeholder="Phone Number"></md-input-container><md-button class=md-primary ng-click=vm.login()>login</md-button><md-button class=md-warn ng-click=vm.query()>query</md-button></div></div>'),t.put("app/main/main.html",'<div layout=vertical layout-fill><md-content><header><acme-navbar creation-date=main.creationDate></acme-navbar></header><section class=jumbotron><h1>\'Allo, \'Allo!</h1><p class=lead><img src=assets/images/yeoman.png alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><md-button class="md-raised animated infinite" ng-class=main.classAnimation ng-click=main.showToastr()>Splendid Toastr</md-button><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></section><div class=techs layout-align=center><md-card ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><md-card-content><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><h3 class=md-title>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p></md-card-content><div class=md-action-buttons><md-button ng-href="{{ awesomeThing.url }}">Website</md-button></div></md-card></div></md-content></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-a3ee9b86d0.js.map
