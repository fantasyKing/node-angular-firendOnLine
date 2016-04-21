/// <reference path="D:\nodejs-workspace\nodejs\node-angular-FriendLine\typings\tsd.d.ts" />
angular.module('myApp.directive')
    .directive("leftBar", function($timeout, $state) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                state: '=',
                chatIndex: '=',
                commentIndex: '='
            },
            templateUrl: '/template/leftbar.html',
            controller: function($scope, $element) {
                this.setState = function(state) {
                    $element.find('li').each(function(index, ele) {
                        if (angular.equals($(ele).attr("id"), state + '_state')) {
                            $element.find("li.active").removeClass("active");
                            $(ele).addClass("active");
                            $state.go('main.' + state);
                        }
                    });
                }
            },
            link: function(scope, element, attrs) {
                var state = scope.state || 'sy';
                element.find("li").each(function(index, ele) {
                    if (angular.equals($(ele).attr("id"), state + '_state')) {
                        element.find("li.active").removeClass("active");
                        $(ele).addClass("active");
                        $state.go('main.' + scope.state);
                    }
                    $(ele).bind("click", function(e) {
                        e.preventDefault();
                        if (!$(e.currentTarget).hasClass("active")) {
                            element.find("li.active").removeClass("active");
                            $(e.currentTarget).addClass("active");
                        }
                        var clickId = $(e.currentTarget).attr('id');
                        $state.go('main.' + clickId.substring(0, clickId.indexOf('_')));
                    });
                });
            }
        }
    })