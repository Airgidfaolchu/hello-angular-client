'use strict';

var myApp = angular.module('myApp', ['ngRoute',
    'ngSanitize',
    'myApp.controllers',
    'myApp.directives',
    'myApp.services',
    'myApp.filters',
    'snap',
    'fhcloud'
]);

myApp.config(function($routeProvider) {

    $routeProvider
        .when('/hello', {
            templateUrl: 'views/hello.html',
            controller: 'MainCtrl'
        })

    .otherwise({
        redirectTo: '/hello'
    });
});