angular.module("app").filter("fromNow",function(){return function(n){return moment(n).fromNow()}});