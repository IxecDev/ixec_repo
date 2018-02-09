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
                    templateUrl: 'templates/home.template.html'
                }
            },
            resolve: {
                loadHomeCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('./controllers/home.controller.js');
                }]
            }
        })
        .state('search', {
            url: '/search',
            views: {
                'lazyLoadView': {
                    controller: 'searchController',
                    templateUrl: 'templates/search.template.html'
                }
            },
            resolve: {
                loadSearchCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('./controllers/search.controller.js');
                }]
            }
        })
        .state('view', {
            url: '/view',
            views: {
                'lazyLoadView': {
                    controller: 'viewController',
                    templateUrl: 'templates/view.template.html'
                }
            },
            resolve: {
                loadSearchCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('./controllers/view.controller.js');
                }]
            }
        })

        // CMS ROUTES
        .state('login', {
            url: '/cms/login',
            views: {
                'lazyLoadView': {
                    controller: 'loginController',
                    templateUrl: 'templates/cms/login.template.html'
                }
            },
            resolve: {
                loadSearchCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('./controllers/cms/login.controller.js');
                }]
            }
        })
        .state('admon', {
            url: '/cms/admon',
            views: {
                'lazyLoadView': {
                    controller: 'admonController',
                    templateUrl: 'templates/cms/admon.template.html'
                }
            },
            resolve: {
                loadSearchCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('./controllers/cms/admon.controller.js');
                }]
            }
        })
        .state('property', {
            url: '/cms/property',
            views: {
                'lazyLoadView': {
                    controller: 'propertyController',
                    templateUrl: 'templates/cms/property.template.html'
                }
            },
            resolve: {
                loadSearchCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('./controllers/cms/property.controller.js');
                }]
            }
        })
        .state('weAre', {
            url: '/cms/weAre',
            views: {
                'lazyLoadView': {
                    controller: 'weAreController',
                    templateUrl: 'templates/cms/we-are.template.html'
                }
            },
            resolve: {
                loadSearchCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('./controllers/cms/we-are.controller.js');
                }]
            }
        });

    $locationProvider.html5Mode(false);
});