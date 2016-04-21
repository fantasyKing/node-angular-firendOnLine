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
            link: function(scope, element, attrs) {
                var state = scope.state || 'sy';
                element.find("li").each(function(index, ele) {
                    if (angular.equals($(ele).attr("id"), state + '_state')) {
                        $state.go('main.' + scope.state);
                    }
                    $(ele).bind("click", function(e) {
                        e.preventDefault();
                        var clickId = $(e.currentTarget).attr('id');
                        scope.state = clickId.substring(0, clickId.indexOf('_'));
                        $state.go('main.' + scope.state);
                    });
                });
            }
        }
    })