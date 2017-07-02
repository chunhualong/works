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