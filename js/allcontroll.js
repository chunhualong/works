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
(function() {
    angular.module('myName', [])
        .controller('name', ['$scope', '$http', '$location', function($scope, $http, $location) {
            $http({
                method: 'GET',
                url: '/nameList'
            }).then(function(data) {
                $scope.nameList = data.data;
            })
            $scope.go = function(name) {
                $location.url(name)
            }
        }])
})();
(function() {
    angular.module('mySearch', [])
        .controller('search', ['$scope', '$http', function($scope, $http) {
            $http({
                method: "get",
                url: '/nameList'
            }).then(function(data) {
                console.log(data.data)
                $scope.seachName = data.data;
            })
            $scope.$watch('seachname', function(newValue, oldValue) {
                console.log(oldValue)
                if (newValue) {
                    console.log(11)
                    $scope.iftext = true;
                } else {
                    $scope.iftext = false;
                }
            })
        }]);
})();