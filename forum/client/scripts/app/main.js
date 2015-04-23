requirejs.config({
    
    paths: {
        /* Start: 3rd party Libs aliases */
        'jquery': '../libs/jquery-1.9.1',
        'bootstrap': '../libs/bootstrap/bootstrap',
        'angular': '../libs/angular/angular',
        'angular-route': '../libs/angular/angular-route',
        'angular-loader': '../libs/angular/angular-loader',  
        'angular-cookies': '../libs/angular/angular-cookies',
        'ui-bootstrap': '../libs/ui-bootstrap-tpls-0.12.1.min',  
        'angular-animate': '../libs/angular/angular-animate', 
        'angular-block-ui': '../libs/angular/angular-block-ui',
        /* End: 3rd party Libs aliases */

        /* App Initializer */
        'app': 'app',
        
        /* Start: Controllers Layer aliases */        
        'InitControllers': 'controllers/InitControllers',
        'BaseController': 'controllers/BaseController',
        'RootController': 'controllers/security/RootController',
        'QuestionController': 'controllers/questions/QuestionController',
        'QuestionDetailController': 'controllers/questions/QuestionDetailController',
        /* End: Controllers Layer aliases */
        
        
    },
    
    shim: {
        'InitControllers': {
            deps: ['angular','angular-cookies', 'angular-block-ui']
        },
        
        'app': {
            deps: ['angular', 'angular-route', 'ui-bootstrap', 'angular-animate', 'angular-loader', 'InitControllers', 'bootstrap', 'jquery']
        },

        'angular-route': {
            deps: ['angular']
        },

        'angular-loader': {
            deps: ['angular', 'angular-cookies']
        },

        'bootstrap': {
            deps: ['jquery']
        },

        'angular-cookies': {
            deps: ['angular']
        },

        'ui-bootstrap': {
            deps: ['angular', 'bootstrap']
        },

        'angular-animate': {
            deps: ['angular']
        },

        'angular-block-ui': {
            deps: ['angular']
        },
    }
});

requirejs(['app'], function() {
    
    angular.bootstrap(document, ['forum']);
});