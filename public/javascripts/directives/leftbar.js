angular.module('myApp.directive')
    .directive("leftBar", function($timeout) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                state: '=',
                chatIndex: '=',
                commentIndex: '='
            },
            templateUrl: '/template/leftbar.html',
            link: function(scope, element, attrs) {
                var state = scope.state || 'sy_state';
                element.find("li").each(function(index, ele) {
                    if (angular.equals($(ele).attr("id"), state)) {
                        element.find("li.active").removeClass("active");
                        $(ele).addClass("active");
                    }
                    $(ele).bind("click", function(e) {
                        e.preventDefault();
                        if (!$(e.currentTarget).hasClass("active")) {
                            element.find("li.active").removeClass("active");
                            $(e.currentTarget).addClass("active");
                        }
                    });
                });
            }
        }
    })