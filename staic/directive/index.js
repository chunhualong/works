(function() {
    angular.module('myMain', [])
        .directive('main', [function() {
            return {
                restrict: "AE",
                scope: true,
                replace: true,
                transclude: true,
                template: '<div class="weui-tab"><div style="height:100%;" ng-transclude></div></div>',
            }
        }])
})();