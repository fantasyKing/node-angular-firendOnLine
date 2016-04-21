angular.module('myApp.service')
    .factory('alertService', function($timeout) {
        var scope = {};
        return {
            setScope: function(sc) {
                scope = sc;
            },
            setOption: function(option) {
                if (option.hasOwnProperty('title')) {
                    scope.title = option.title;
                }
                if (option.hasOwnProperty('msg')) {
                    scope.msg = option.msg;
                }
                if (option.hasOwnProperty('alertShow')) {
                    scope.alertShow = option.alertShow;
                    if (option.alertShow) {
                        $timeout(function() {
                            scope.alertShow = false;
                        }, 3000);
                    }
                }
                if (option.hasOwnProperty('alertType')) {
                    scope.alertType = option.alertType;
                }
            }
        };
    });