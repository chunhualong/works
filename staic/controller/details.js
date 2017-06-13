(function() {
    angular.module('mydetails', [])
        .controller('nameDetails', ['$scope', '$routeParams', function($scope, $routeParams) {
            $scope.ifname = $routeParams
            console.log($routeParams)
        }])
})();