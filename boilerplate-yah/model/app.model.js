var ApplicationModel = angular.module('ApplicationModel', ['ngRoute']);

ApplicationModel.config(function ($routeProvider, $locationProvider, $controllerProvider) {
    ApplicationModel.loadController = $controllerProvider.register;

    $routeProvider
        .when('/', {
            templateUrl: 'template/home.template.html',
            controller: 'HomeController'
        })
        .when('/help', {
            templateUrl: 'template/help.template.html',
            controller: 'HelpController'
        })
        .when('/about', {
            templateUrl: 'template/about.template.html',
            controller: 'AboutController'
        })
        .otherwise('/');
});

ApplicationModel.run(function ($rootScope, $http, $location) {

    var SCRIPT_LIST = [
        'controller/help.controller.js',
        'controller/about.controller.js',
    ];

    // LOCAL FUNCTIONS
    function requestScriptList() {
        for (var i = 0; SCRIPT_LIST[i]; i++) {
            var script = document.createElement('script');
            script.src = SCRIPT_LIST[i];

            document.body.appendChild(script);
        }
    }

    function init() {
        requestScriptList();
    }

    // INITIALIZATION
    init();

});