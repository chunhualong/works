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
            })

            console.log($routeParams)
        }])
})();
(function() {
    angular.module('myName', [])
        .controller('name', ['$scope', '$http', '$location', function($scope, $http, $location) {
            $http({
                method: 'GET',
                url: '/nameList'
            }).then(function(data) {
                console.log(data.data)
                $scope.nameList = data.data;
            })
            $scope.go = function(name) {
                console.log(name)
                $location.url(name)
            }
        }])
})();