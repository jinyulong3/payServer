app.controller("appC",["$scope","$state","toaster","myConstants","$uibModal","httpJsonHandle","$translate",function(a,s,o,p,n,t,e){var l=e.proposedLanguage()||e.use();a.app.myData.lang=l,console.log("开始请求系统参数并保存"),""!=a.app.myData.sessionId&&null!=a.app.myData.sessionId&&void 0!==a.app.myData.sessionId||s.go("app.signin")}]);