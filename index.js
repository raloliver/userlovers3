(function() {
    'use strict';

    angular.module('leadlovers', [
        'ngMaterial'
    ])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider
        .theme('default')
        .primaryPalette('grey')
        .accentPalette('pink')
        .warnPalette('amber')
        .backgroundPalette('grey');
    })
    .controller('userCtrl', function ($scope, $mdSidenav) {
             
        $scope.toggleMainLeft = function() {
            $mdSidenav('main-left').toggle();
        };
        $scope.toggleMainRight = function() {
            $mdSidenav('main-right').toggle();
        };
        $scope.toggleToolbarTools = function() {
            $mdSidenav('toolbar-tools').toggle();
        };
        $scope.closeMainLeft = function() {
            $mdSidenav('main-left').close();
        };
        $scope.closeToolbarTools = function() {
            $mdSidenav('toolbar-tools').close();
        };
    });
})();