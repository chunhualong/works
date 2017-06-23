(function() {
    angular.module('myHeader', [])
        .directive('header', [function() {
            return {
                restrict: "AE",
                scope: true,
                replace: true,
                templateUrl: 'demo/header.html',
                link: function() {
                    console.log(this)
                }
            }
        }])
})();
(function() {
    angular.module('myMain', [])
        .directive('main', ['$location', function($location) {
            return {
                restrict: "AE",
                scope: true,
                replace: true,
                transclude: true,
                template: '<div class="weui-tab"><div style="height:100%;" ng-transclude></div></div>',
                controller: 'nameDetails'
            }
        }])
})();
(function() {
    angular.module('myTabbar', [])
        .directive('tabBar', ['$routeParams', '$location', function($routeParams, $location) {
            return {
                restrict: "AE",
                scope: true,
                replace: true,
                templateUrl: 'demo/routeTmp/tabbar.html',
                controller: function($scope, $routeParams, $location) {
                    console.log($location)
                },
                link: function(scope, iElement, iAttrs) {


                    var ele = iElement.children();
                    for (var a = 0; a < ele.length; a++) {
                        ele[a].onclick = function() {
                            ele.attr('class', 'weui-tabbar__item');
                            this.className = 'weui-tabbar__item weui-bar__item_on';
                        }
                    }
                }
            }
        }])
})();