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