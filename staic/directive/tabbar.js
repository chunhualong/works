(function() {
    angular.module('myTabbar', [])
        .directive('tabBar', ['$routeParams', function($routeParams) {
            return {
                restrict: "AE",
                scope: true,
                replace: true,
                templateUrl: 'demo/routeTmp/tabbar.html',
                link: function(scope, iElement, iAttrs) {

                    console.log(scope.ifname)
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