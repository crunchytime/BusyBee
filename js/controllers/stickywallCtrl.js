

// this is the wrong way to create a module: 
// var swCtrl = angular.module("stickywallCtrl", []); 
// // adding components to our "stickywallCtrl Module": 
// swCtrl.controller();
// swCtrl.service();


// instead, we chain it: 
angular.module("stickywallCtrlModule", [])
.controller("StickyWallCtrl")
.service();