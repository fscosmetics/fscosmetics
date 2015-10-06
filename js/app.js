/*global angular */
var fsCosmeticsApp = angular.module('fsCosmeticsApp', ['ngRoute', 'ngResource', 'ngAnimate'], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

// ROUTES
fsCosmeticsApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/angular/product-template.html',
            controller: 'productList'
        })
        .when('/:category', {
            templateUrl: '/angular/product-template.html',
            controller: 'categoryController'
        })
        .when('/:category/:slug', {
            templateUrl: function (params) {
                return params.category + '/' + params.slug;
            },
            controller: 'productController'
        })
    ;
});

fsCosmeticsApp.animation('.reveal-animation', function() {
    return {
        enter: function(element, done) {
            element.css('display', 'none');
            element.fadeIn(500, done);
            return function() {
                element.stop();
            }
        },
        leave: function(element, done) {
            element.fadeOut(500, done);
            return function() {
                element.stop();
            }
        }
    }
});

fsCosmeticsApp.factory('myService', function ($http) {
    return {
        getProducts: function () {
            return $http.get('/api/products.json')
                .then(function (result) {
                    //resolve the promise as the data
                    return result.data;
                });
        },
        getCategoryProducts: function (category) {
            console.log(category);
            return $http.get('/api/categories/' + category + '.json')
                .then(function (result) {
                    //resolve the promise as the data
                    return result.data;
                });
        }
    }
});

fsCosmeticsApp.controller('productList', ['$scope', 'myService', function ($scope, myService) {
    $scope.loading = true;
    myService.getProducts().then(function(products) {
        $scope.data = products;
        $scope.loading = false;
    });
}]);

fsCosmeticsApp.controller('categoryController', ['$scope', '$routeParams', 'myService', function ($scope, $routeParams, myService) {
    $scope.loading = true;
    myService.getCategoryProducts($routeParams.category.toLowerCase()).then(function(products) {
        $scope.data = products;
        $scope.loading = false
    });

}]);

fsCosmeticsApp.controller('productController', ['$scope', 'myService', function ($scope, myService) {
    console.log('aw');

}]);
