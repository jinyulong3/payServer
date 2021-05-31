angular.module("app").run(["$rootScope","$state","$stateParams",function(t,e,a){t.$state=e,t.$stateParams=a}]).config(["$stateProvider","$urlRouterProvider",function(t,e){e.otherwise("access/signin"),t.state("app",{abstract:!0,url:"/app",templateUrl:"tpl/app.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load(["js/controllers/appC.js"])}]}}).state("app.main",{url:"/main",templateUrl:"tpl/main.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load(["js/controllers/pageMain.js"])}]}}).state("app.dashboard-v2",{url:"/dashboard-v2",templateUrl:"tpl/app_dashboard_v2.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load(["js/controllers/chart.js"])}]}}).state("app.chart",{url:"/chart",templateUrl:"tpl/ui_chart.html",resolve:{deps:["uiLoad",function(t){return t.load("js/controllers/chart.js")}]}}).state("app.test2",{url:"/test2",templateUrl:"tpl/test.html"}).state("app.ui.buttons",{url:"/buttons",templateUrl:"tpl/ui_buttons.html"}).state("access",{url:"/access",template:'<div ui-view class="fade-in-right-big smooth"></div>'}).state("access.signin",{url:"/signin",templateUrl:"tpl/page_signin.html",resolve:{deps:["uiLoad",function(t){return t.load(["js/controllers/signin.js"])}]}}).state("app.customerManage",{url:"/customerManage",templateUrl:"tpl/system/customer/customerManage.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/customer/customer-manage.js")})}]}}).state("app.stationManage",{url:"/stationManage",templateUrl:"tpl/system/station/stationManage.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/station/station-manage.js")})}]}}).state("app.deviceManage",{url:"/deviceManage",templateUrl:"tpl/system/device/deviceManage.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/device/device-manage.js")})}]}}).state("app.userManage",{url:"/userManage",templateUrl:"tpl/system/user/userManage.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/user/user-manage.js")})}]}}).state("app.weixinManage",{url:"/weixinManage",templateUrl:"tpl/system/payset/weixinManage.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/payset/weixin-manage.js")})}]}}).state("app.zhifubaoManage",{url:"/zhifubaoManage",templateUrl:"tpl/system/payset/zhifubaoManage.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/payset/zhifubao-manage.js")})}]}}).state("app.icbcManage",{url:"/icbcManage",templateUrl:"tpl/system/payset/icbc/icbcManage.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/payset/icbc-manage.js")})}]}}).state("app.queryCompleteTrans",{url:"/queryCompleteTrans",templateUrl:"tpl/system/trans/queryCompleteTrans.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/trans/query-complete-trans.js")})}]}}).state("app.queryPayTrans",{url:"/queryPayTrans",templateUrl:"tpl/system/trans/queryPayTrans.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/trans/query-pay-trans.js")})}]}}).state("app.queryExceptionPayTrans",{url:"/queryExceptionPayTrans",templateUrl:"tpl/system/trans/queryExceptionPayTrans.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/trans/query-exception-pay-trans.js")})}]}}).state("app.queryRefundTrans",{url:"/queryRefundTrans",templateUrl:"tpl/system/trans/queryRefundTrans.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/trans/query-refund-trans.js")})}]}}).state("app.transCollect",{url:"/transCollect",templateUrl:"tpl/system/trans/transCollect.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/trans/trans-collect.js")})}]}}).state("app.queryShift",{url:"/queryShift",templateUrl:"tpl/system/shift/queryShift.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/shift/query-shift.js")})}]}}).state("app.queryOilShift",{url:"/queryOilShift",templateUrl:"tpl/system/shift/queryOilShift.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/shift/query-oil-shift.js")})}]}}).state("app.queryTankShift",{url:"/queryTankShift",templateUrl:"tpl/system/shift/queryTankShift.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/shift/query-tank-shift.js")})}]}}).state("app.queryNozzleShift",{url:"/queryNozzleShift",templateUrl:"tpl/system/shift/queryNozzleShift.html",resolve:{deps:["$ocLazyLoad",function(t){return t.load("ngGrid").then(function(){return t.load("js/controllers/system/shift/query-nozzle-shift.js")})}]}}).state("index",{url:"/index",views:{"":{templateUrl:"index.html"},"main1@index":{templateUrl:"tpl/form1.html"},"main2@index":{templateUrl:"tpl/form2.html"}}})}]);