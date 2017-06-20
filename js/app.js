var angular = require('angular');
var ngRoute = require('angular-route');
angular.module('ngApp', ['ngRoute', 'myMain', 'myName', 'myHeader', 'mydetails', 'myTabbar'])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
            when('/nameshow', {
                templateUrl: "demo/routeTmp/index.html"
            }).
            when('/details/:name/:id', {
                templateUrl: 'demo/routeTmp/details.html'
            }).
            otherwise('/nameshow');
        }
    ]);