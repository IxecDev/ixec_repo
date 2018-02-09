var Angular = angular.module('AngularJS', ['ui.router', 'oc.lazyLoad']);

Angular.config(function ($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider, $controllerProvider) {
    Angular.loadController = $controllerProvider.register;

    $urlRouterProvider.otherwise('/');
    $locationProvider.hashPrefix('!');

    $stateProvider.state('home', {
        url: '/',
        views: {
            'lazyLoadView': {
                controller: 'homeController',
                templateUrl: 'templates/home.html'
            }
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('./controllers/home.controller.js');
            }]
        }
    });

    $locationProvider.html5Mode(false);
});