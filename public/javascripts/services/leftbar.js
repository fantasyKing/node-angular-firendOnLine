/// <reference path="D:\nodejs-workspace\nodejs\node-angular-FriendLine\typings\tsd.d.ts" />
angular.module('myApp.service')
    .service('leftbarService', function() {
        var scope = {};
        return {
            setScope: function(sc) {
                scope = sc;
            },
            setOption: function(option) {
                if (option.hasOwnProperty('state')) {
                    scope.state = option.state;
                }
                if (option.hasOwnProperty('chatIndex')) {
                    scope.chatIndex = option.chatIndex;
                }
                if (option.hasOwnProperty('commentIndex')) {
                    scope.commentIndex = option.commentIndex;
                }
            }
        }
    })