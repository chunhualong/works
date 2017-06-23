(function() {
    angular.module('mydetails', [])
        .controller('nameDetails', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
            $scope.ifname = $routeParams;
            $http({
                method: "POST",
                url: '/nameShow',
                data: $routeParams
            }).then(function(data) {
                console.log(data)
                $scope.nameList = data.data;
            })
        }])
})();