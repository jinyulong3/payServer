"use strict";app.controller("SigninFormController",["$rootScope","$scope","$state","$cookieStore","$uibModal","md5","httpJsonHandle","myConstants","myPublicMethod","$translate",function(a,o,p,e,t,s,r,n,l,d){o.user={},console.log(o.app.myData);var u=d.proposedLanguage()||d.use();o.app.myData.lang=void 0===u?"zh-cn":u,d.use(o.app.myData.lang),console.log(o.app.myData.lang),o.toEn=function(){d.use("en")},o.toZh=function(){d.use("zh-cn")},null!=o.app.myData.userId&&(o.user.userId=o.app.myData.userId,o.user.passWord=o.app.myData.passWord),o.login={},o.login.chk=!0,o.login.test="checked";var m=document.getElementById("rememberPswCheckBox");m.checked=!0,o.authError=null,o.login=function(){o.authError=null,o.validateCode()&&r.myPost(n.URL.systemUrl,o.user,n.msgIdName.loginMsgId).then(function(a){switch(console.log(a),a.data.resCode){case n.resCode.SUCCESS:!function(a){if(o.app.myData.name=a.data.data.name,o.app.myData.sessionId=a.data.data.sessionId,o.app.myData.role=a.data.data.role,o.app.myData.groupId=a.data.data.groupId,o.app.myData.groupName=a.data.data.groupName,o.app.myData.stationId=a.data.data.stationId,o.app.myData.stationName=a.data.data.stationName,o.app.myData.groupList=[],o.app.myData.groupListNoAll=[],0<o.app.myData.role){var e={group_id:o.app.myData.groupId,groupName:o.app.myData.groupName};console.log(e),o.app.myData.groupList.push(e),o.app.myData.groupListNoAll.push(e),console.log(o.app.myData.groupList),console.log(o.app.myData.groupListNoAll)}m.checked?(o.app.myData.username=o.user.username,o.app.myData.password=o.user.passWord):(o.app.myData.username=null,o.app.myData.password=null);if(o.app.myData.username=o.user.username,o.app.myData.oldPsw=o.user.password,0==o.app.myData.role){var t={sessionId:o.app.myData.sessionId,tableName:"groups_list",fields:[],limit:2e3,offset:0};r.myPost2(n.URL.systemUrl,t,n.msgIdName.normalSelectMsgId,n.msgIdName.normalSelectMsgName,function(a){if(o.app.myData.groupListNoAll=a.fieldValues,o.app.myData.groupList=a.fieldValues,1<a.fieldValues.length){var e={group_id:"0",groupName:d.instant("public.all")};o.app.myData.groupList.unshift(e)}})}p.go("app.main")}(a);default:o.createCode(4),o.authError=a.data.resMsg}},function(a){o.authError=constantsLang[o.app.myData.lang].tips.error,console.log(a)})},o.createCode=function(a){for(var e="",t=parseInt(a),o=document.getElementById("checkCode"),p=new Array(3,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","j","k","b","m","n","h","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","J","K","B","M","N","H","P","Q","R","S","T","U","V","W","X","Y","Z"),s=0;s<t;s++){var r=p[Math.floor(62*Math.random())];void 0===r&&(r="a"),e+=r}o&&(o.className="code",o.innerHTML=e)},o.createCode(4),o.validateCode=function(){var a=document.getElementById("checkCode").innerHTML;return console.log(a),o.user.inputCode.length<=0?(o.authError=constantsLang[o.app.myData.lang].tips.inputValidateCode,!1):o.user.inputCode.toUpperCase()==a.toUpperCase()||(o.authError=constantsLang[o.app.myData.lang].tips.validateCodeError,o.createCode(4),!1)}}]);