var COMPONENTS_FOLDER = 'application/components/';
var DIRECTIVES_FOLDER = 'application/directives/';
var SERVICES_FOLDER = 'application/services/';
var TEMPLATES_FOLDER = 'application/templates/';
var ELEMENT_FOLDER = '';

var ApplicationModel = angular.module('ApplicationModel', ['ngRoute']);

ApplicationModel.config(function ($routeProvider, $locationProvider, $controllerProvider) {
    $routeProvider
        .when('/', {
            templateUrl: TEMPLATES_FOLDER + '/home/home.template.html',
            controller: 'HomeController'
        })
        .when('/help', {
            templateUrl: TEMPLATES_FOLDER + 'help/help.template.html',
            controller: 'HelpController'
        })
        .when('/about', {
            templateUrl: TEMPLATES_FOLDER + 'about/about.template.html',
            controller: 'AboutController'
        })
        .otherwise('/');
});

ApplicationModel.run(function ($rootScope, $http, $location) {

});