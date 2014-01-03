MAILEXT={};MAILEXT.Updater={};MAILEXT.Updater.Constant={debug:false,remoteUrl:"https://conf.bumblead.com/update",localUrl:"http://localhost/mailext/update.js"};(function(){var A=MAILEXT.Updater.Constant;MAILEXT.Updater=function(H){var L={localParams:{version:0,modules:undefined,oldModules:undefined,readyModules:undefined,lastUpdate:undefined,isOptionsPage:false,status:0,updateResponse:undefined,clientId:undefined},_constructor:function C(T){O.updateEnd=T.updateEnd;window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem;O.initLocalParams({isOptionsPage:T.isOptionsPage,optionsCallback:function U(){O.requestFileSystem(false)},updateCallback:function S(){O.isNeedUpdate({update:function(V){O.localParams.updateResponse=V;O.localParams.version=V.ver;O.localParams.oldModules=O.localParams.modules;O.localParams.modules=V.modules;O.localParams.lastUpdate=+new Date();O.requestFileSystem(true)},get:function(){O.requestFileSystem(false)},fail:function(){}})}})},initUpdateTimer:function G(){O.isNeedUpdate({update:function(S){chrome.storage.local.set({data:S},function(T){O.localParams.version=S.ver;O.localParams.oldModules=O.localParams.modules;O.localParams.modules=S.modules;O.localParams.lastUpdate=+new Date();O.localParams.readyModules={length:0};O.requestFileSystem(true)})},get:function(){O.localParams.readyModules={length:0};O.requestFileSystem(false)},fail:function(){}})},initLocalParams:function B(T){var S=O.localParams;S.readyModules={length:0};S.isOptionsPage=T.isOptionsPage;chrome.storage.local.get("data",function(V){var W=O.localParams,U=V.data;if(V.hasOwnProperty("data")){W.version=U.ver;W.modules=U.modules;W.lastUpdate=U.lastUpdate}O.getSyncedData(function(){if(W.isOptionsPage){T.optionsCallback()}else{T.updateCallback()}})})},getSyncedData:function D(S){chrome.storage.sync.get("data",function(T){if(T.hasOwnProperty("data")){O.localParams.clientId=T.data.clientId}S()})},requestFileSystem:function K(S){window.requestFileSystem(window.TEMPORARY,5*1024*1024,S?O.updateModules:O.getModules,O.errorHandler)},updateModules:function N(T){var V=O.localParams.modules,U=O.localParams.oldModules,Z,X,Y=function(a){return a.file===X.file};for(var W=0,S=V.length;W<S;W++){X=V[W];if(U){Z=U.filter(Y)}if(!Z||Z.length==0||(Z&&Z[0].ver!==X.ver)){O.writeFile(T,X)}else{O.readFile(T,Z[0])}}},writeFile:function J(S,T){S.root.getFile(T.file,{create:true},function(W){var U=W.toURL(),V;console.log(U);W.createWriter(function(Z){var Y=false;Z.onwriteend=function X(a){if(!Y){O.updateFileEnd({url:U,name:T.file,content:V});Y=true;this.truncate(this.position);console.log("Write completed.");return}};Z.onerror=function(a){console.log("Write failed: "+a.toString())};O.getUpdate(T,function(b){V=b;var a=new Blob([b],{type:"text/javascript"});Z.write(a)})},O.errorHandler)},O.errorHandler)},getModules:function E(T){var V,S,W,U=O.localParams.modules;for(V=0,S=U.length;V<S;V++){W=U[V];O.readFile(T,W)}},readFile:function R(S,T){S.root.getFile(T.file,{},function(V){var U=V.toURL();console.log(U);V.file(function(X){var W=new FileReader();W.onloadend=function(Y){O.updateFileEnd({url:U,name:T.file,content:this.result})};W.readAsText(X)},O.errorHandler)},function(U){O.errorHandler(U);O.writeFile(S,T)})},getUpdate:function Q(S,T){O.ajaxRequest({url:S.url,callback:T,fail:function(){O.localParams.status=1}})},updateFileEnd:function I(V){var U=O.localParams,S=U.readyModules,T=U.modules.length;O.localParams.readyModules[V.name]=V;if(T==++S.length&&U.status==0){chrome.storage.local.set({data:U.updateResponse},function(W){});O.updateEnd(S,U.modules)}},isNeedUpdate:function F(S){O.ajaxRequest({url:A.debug?A.localUrl:A.remoteUrl,data:{version:O.localParams.version,extId:chrome.i18n.getMessage("@@extension_id"),clientId:O.localParams.clientId},callback:function(U){try{var T=JSON.parse(U);if(!T.isLatest){S.update(T.version)}else{S.get()}}catch(V){S.fail(V)}}})},ajaxRequest:function P(T){var S;if(window.XMLHttpRequest){S=new XMLHttpRequest()}S.onreadystatechange=function(){if(S.readyState==4&&S.status==200){T.callback(S.responseText)}else{if(S.readyState==4&&S.status!=200){T.fail()}}};S.open(T.data&&!A.debug?"POST":"GET",T.url,true);if(T.data){S.setRequestHeader("Content-Type","application/json;charset=UTF-8")}S.setRequestHeader("Cache-Control","no-cache");if(T.data){S.send(JSON.stringify({s:window.btoa(encodeURIComponent(JSON.stringify(T.data)))}))}else{S.send()}},errorHandler:function M(S){var T="";switch(S.code){case FileError.QUOTA_EXCEEDED_ERR:T="QUOTA_EXCEEDED_ERR";break;case FileError.NOT_FOUND_ERR:T="NOT_FOUND_ERR";break;case FileError.SECURITY_ERR:T="SECURITY_ERR";break;case FileError.INVALID_MODIFICATION_ERR:T="INVALID_MODIFICATION_ERR";break;case FileError.INVALID_STATE_ERR:T="INVALID_STATE_ERR";break;default:T="Unknown Error";break}console.log("Error: "+T)}},O=L;L._constructor(H)}}());var BumbleAd=function(A){var B;if(!BumbleAd.isActive){BumbleAd.isActive=true}if(MAILEXT&&MAILEXT.Hosted&&MAILEXT.Hosted.Options&&MAILEXT.Hosted.Options.OptionsManager){B=new MAILEXT.Hosted.Options.OptionsManager(A)}else{setTimeout(function(){B=new BumbleAd(A)},10)}};BumbleAd.prototype.isActive=false;(function(){var D=MAILEXT.Updater,A=true,C;try{C=chrome.extension.getBackgroundPage().location.href}catch(E){console.log("Not a internal page")}var F=new D({isOptionsPage:C!==document.location.href,updateEnd:function B(I,H){var J,K,O,S,L,P=[],Q=[],R=[],N=document.getElementsByTagName("body")[0],G=document.getElementsByTagName("script"),M=function M(U){var T=U.src.split("/"),V=T[T.length-1];return I[V]&&I[V].url===U.src};if(!A){for(K=0,O=G.length;K<O;K++){S=G[K];L=M(S);if(L){Q.push(S)}}Q.forEach(function(T){T.parentNode.removeChild(T)})}A=false;for(K=0,O=I.length;K<O;K++){S=I[H[K].file];P.push(S.content);R.push(S.url);J=document.createElement("script");J.src=S.url;J.charset="UTF-8";J.async=false;N.appendChild(J)}MAILEXT.Code=P.join("");MAILEXT.Files=R}})}());