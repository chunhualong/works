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