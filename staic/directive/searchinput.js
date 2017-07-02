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