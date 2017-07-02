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
    angular.module('myInput', [])
        .directive('myinput', [function() {
            return {
                restrict: "AE",
                scope: false,
                replace: true,
                template: `<div class="weui-search-bar" id="searchBar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" ng-model='seachname'>
                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                </div>
                <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
        </div>`,
                link: function(scope, ele, attr) {
                    console.log(ele)
                    ele[0].onclick = function() {
                        this.className = 'weui-search-bar weui-search-bar_focusing';
                        console.log(ele.children().children().children('input')[1].focus())
                    }
                },
                controller: 'search'
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