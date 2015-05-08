"use strict";var mainApp=angular.module("uidesignerApp",["ngRoute","ngAnimate","uiDesingCtrl"]);mainApp.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/page2",{templateUrl:"views/page2.html",controller:"Page2Ctrl"}).when("/page3",{templateUrl:"views/page3.html",controller:"Page3Ctrl"}).when("/page4",{templateUrl:"views/page4.html",controller:"Page4Ctrl"}).when("/page5",{templateUrl:"views/page5.html",controller:"Page5Ctrl"}).when("/page6",{templateUrl:"views/page6.html",controller:"Page6Ctrl"}).when("/page7",{templateUrl:"views/page7.html",controller:"Page7Ctrl"}).when("/page8",{templateUrl:"views/page8.html",controller:"Page8Ctrl"}).when("/page9",{templateUrl:"views/page9.html",controller:"Page9Ctrl"}).when("/page10",{templateUrl:"views/page10.html",controller:"Page10Ctrl"}).when("/page11",{templateUrl:"views/page11.html",controller:"Page11Ctrl"}).when("/page12",{templateUrl:"views/page12.html",controller:"Page12Ctrl"}).when("/page13",{templateUrl:"views/page13.html",controller:"Page13Ctrl"}).when("/page14",{templateUrl:"views/page14.html",controller:"Page14Ctrl"}).when("/page15",{templateUrl:"views/page15.html",controller:"Page15Ctrl"}).when("/page16",{templateUrl:"views/page16.html",controller:"Page16Ctrl"}).otherwise({redirectTo:"/"})}]);var desingCtrl=angular.module("uiDesingCtrl",[]);desingCtrl.controller("bodyCtrl",["$scope","$location",function(a,b){a.navs=[{Url:"/page5",text:"About Me"},{Url:"/page7",text:"Akill"},{Url:"/page8",text:"Awards"},{Url:"/page9",text:"Experience"},{Url:"/page10",text:"Portfolio"},{Url:"/page11",text:"My Advantage"},{Url:"/page12",text:"Service"},{Url:"/page13",text:"People Comment"},{Url:"/page14",text:"Download My CV"},{Url:"/page16",text:"Share"}],a.navs2=[{Url:"/page2",text:"page2"},{Url:"/page3",text:"page3"},{Url:"/page4",text:"page4"}],a.isActive=function(c){return"/page2"===b.path()||"/page3"===b.path()||"/page4"===b.path()?(a.showNav1=!1,a.showNav2=!0):(a.showNav1=!0,a.showNav2=!1),"/"===b.path()&&(console.log(a.showNav1),a.showNav1=!1,a.showNav2=!1),c.Url===b.path()?!0:!1}}]),desingCtrl.controller("MainCtrl",["$scope",function(a){a.pageClass="page1",a.nextPage="page5"}]),desingCtrl.controller("Page2Ctrl",["$scope",function(a){a.pageClass="page2",a.hairs="head0.png",a.jacket="clothes0.png",a.pants="pants0.png",a.shoes="shose0.png",a.hideleg=!1,a.arry=["pants0.png","pants1.png","pants2.png","pants3.png"],a.changeHair0=function(){a.hairs="head0.png"},a.changeHair1=function(){a.hairs="head1.png"},a.changeHair2=function(){a.hairs="head2.png"},a.changeHair3=function(){a.hairs="head3.png"},a.changeClot0=function(){a.jacket="clothes0.png"},a.changeClot1=function(){a.jacket="clothes1.png"},a.changeClot2=function(){a.jacket="clothes2.png"},a.changeClot3=function(){a.jacket="clothes3.png"},a.changeClot4=function(){a.jacket="clothes4.png"},a.changePants0=function(){a.pants="pants0.png"},a.changePants1=function(){a.pants="pants1.png"},a.changePants2=function(){a.pants="pants2.png"},a.changePants3=function(){a.pants="pants3.png"},a.changeShose0=function(){a.shoes="shose0.png"},a.changeShose1=function(){a.shoes="shose1.png"},a.changeShose2=function(){a.shoes="shose2.png"}}]),desingCtrl.controller("Page3Ctrl",["$scope",function(a){a.pageClass="page3",a.show1=function(){a.showGif="showGif1"},a.show2=function(){a.showGif="showGif2"},a.show3=function(){a.showGif="showGif3"},a.show4=function(){a.showGif="showGif4"},a.show5=function(){a.showGif="showGif5"}}]),desingCtrl.controller("Page4Ctrl",["$scope",function(a){a.face="face1",a.changeFace1=function(){a.face="face1"},a.changeFace2=function(){a.face="face2"},a.changeFace3=function(){a.face="face3"},a.changeFace4=function(){a.face="face4"},a.changeFace5=function(){a.face="face5"},a.pageClass="page4"}]),desingCtrl.controller("Page5Ctrl",["$scope",function(a){a.pageClass="page5"}]),desingCtrl.controller("Page6Ctrl",["$scope",function(a){a.pageClass="page6",a.mover="",a.mout="",a.moveLeft=function(){a.mover="active",a.mout="moveout"}}]),desingCtrl.controller("Page7Ctrl",["$scope",function(a){a.pageClass="page7"}]),desingCtrl.controller("Page8Ctrl",["$scope",function(a){a.pageClass="page8",a.carname="car1",a.count=0,a.tapCount=function(){a.count<=9?(a.count++,a.carname=2===a.count||6===a.count?"car2":5===a.count||8===a.count?"car3":"car1"):a.count=1}}]),desingCtrl.controller("Page9Ctrl",["$scope",function(a){a.pageClass="page9"}]),desingCtrl.controller("Page10Ctrl",["$scope",function(a){a.pageClass="page10",a.ImgName=1,a.changeImg=function(){a.ImgName++,a.ImgName>21&&(a.ImgName=1)}}]),desingCtrl.controller("Page11Ctrl",["$scope",function(a){a.pageClass="page11"}]),desingCtrl.controller("Page12Ctrl",["$scope",function(a){a.pageClass="page12",a["class"]={stete1:"",stete2:"",stete3:""},a.change1=function(){a["class"]={stete1:"largen",stete2:"bang",stete3:"bang"}},a.change2=function(){a["class"]={stete1:"bang",stete2:"largen",stete3:"bang"}},a.change3=function(){a["class"]={stete1:"bang",stete2:"bang",stete3:"largen"}},a.Recovery=function(){a["class"]={stete1:"",stete2:"",stete3:""}}}]),desingCtrl.controller("Page13Ctrl",["$scope",function(a){a.pageClass="page13"}]),desingCtrl.controller("Page14Ctrl",["$scope",function(a){a.pageClass="page14",a.resume={show:!1},a.ShowMe=function(){a.resume.show=!a.resume.show}}]),desingCtrl.controller("Page15Ctrl",["$scope",function(a){a.pageClass="page15"}]),desingCtrl.controller("Page16Ctrl",["$scope",function(a){a.pageClass="page16"}]);