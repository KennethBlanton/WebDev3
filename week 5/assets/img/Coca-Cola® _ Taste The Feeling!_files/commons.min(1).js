var janrainCCEU=(function(){var a="Select One";
var e=function(j){for(var k=j.options.length;
k>0;
k--){j.remove(k-1)
}};
var f=function(m){var k={};
for(var j=0,l=m.options.length;
j<l;
j++){k[m.options[j].value]={text:m.options[j].text,value:m.options[j].value}
}return k
};
var c=function(k,j){var i=document.createElement("option");
i.text=k;
i.value=j;
return i
};
var b=function(k){var j=k.split("_");
var i=j.slice(0,2).join("_")+"_form_item_"+j.slice(2).join("_");
return document.getElementById(i)
};
var h=function(i){div=b(i.id);
if(div){div.style.display="none"
}};
var d=function(i){div=b(i.id);
if(div){div.style.display="block"
}};
var g=function(j,o,q,p,n){var m;
if(!q){h(j);
m=c("","");
m.disabled=p.disabled;
j.add(m);
if(document.createEvent){var r=document.createEvent("HTMLEvents");
r.initEvent("change",false,true);
j.dispatchEvent(r);
r=document.createEvent("HTMLEvents");
r.initEvent("focus",false,true);
j.dispatchEvent(r);
r=document.createEvent("HTMLEvents");
r.initEvent("blur",false,true);
j.dispatchEvent(r)
}else{if(j.fireEvent){j.fireEvent("onchange");
j.fireEvent("onfocus");
j.fireEvent("onblur")
}}j.disabled=true
}else{d(j);
j.disabled=false;
if(p){m=c(p.text,a);
m.disabled=p.disabled;
m.selected=true;
j.add(m)
}for(var l=0;
l<q.length;
l++){var k=o[q[l]];
if(k){m=c(k.text,k.value);
if(m.value===n){m.selected=true
}j.add(m)
}}}};
return{addCountryRegionEvent:function(m){var j=document.getElementById(m.countrySelectId);
var l=document.getElementById(m.regionSelectId);
var i=f(l);
var k=function(){var n=m.countryRegionMapping[j.value];
var o=a;
if(l.options[l.selectedIndex]){o=l.options[l.selectedIndex].value
}e(l);
g(l,i,n,m.defaultOption,o)
};
k();
if(j.addEventListener){j.addEventListener("change",k,false)
}else{if(j.attachEvent){j.attachEvent("onchange",k)
}}},updateResidencyRegion:function(n){var k=document.getElementById("capture_"+n+"_residency_region");
var m=document.getElementById("capture_"+n+"_residency_region_hidden");
if(k&&m){if(m.value){for(var l=0;
l<k.options.length;
l++){if(k.options[l].value==m.value){k.selectedIndex=l
}}}var j=function(){if(k.options){var i=k.options[k.selectedIndex].value;
if(i!=a){m.value=i
}else{m.value=""
}}};
if(k.addEventListener){k.addEventListener("change",j,false)
}else{if(k.attachEvent){k.attachEvent("onchange",j)
}}j()
}},passwordValidation:function(j,k,i){return/(?=.*\d)(?=.*[A-Za-z])/.test(k)
},countryRegionMapping:{UK:["CHI","ENG","IM","SCT","WLS"],IE:["NIE","RIE"],MX:["AGU","BC","BCS","CAM","CHI","CHH","COA","COL","DF","DUR","EDM","GUA","GUE","HID","JAL","MIC","MOR","NAY","NL","OAX","PUE","QUE","QR","SLP","SIN","SON","TAB","TAM","TLA","VER","YUC","ZAC"],US:["CA","OR","WA"]}}
})();
function janrainUtilityFunctions(){function d(e,f){return document.getElementById("capture_"+e+"_form_item_"+f)
}function b(e,f){return document.getElementById("capture_"+e+"_"+f)
}function c(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var g=new RegExp("[\\?&]"+e+"=([^&#]*)"),f=g.exec(location.search);
return f===null?"":decodeURIComponent(f[1].replace(/\+/g," "))
}function a(){function h(i){janrain.events[i].addHandler(function(j){console.log(i,j)
})
}if(window.console&&window.console.log){for(var e in janrain.events){try{var f=e;
if(e.hasOwnProperty("eventName")){f=e.eventName
}h(f)
}catch(g){}}}}return{getCaptureFormItem:d,getCaptureField:b,getParameterByName:c,showEvents:a}
}var OneKOID=window.OneKOID||{};
OneKOID.AuthVisibility=(function(){var e,d,b,a,c;
e=function(){var f=document.getElementById("capture_signin_link"),h=document.getElementById("capture_signout_link"),g=document.getElementById("capture_profile_link");
f.style.display="none";
f.setAttribute("hidden","");
h.style.display="";
h.removeAttribute("hidden");
g.style.display="";
g.removeAttribute("hidden")
};
d=function(){var g=document.getElementById("capture_signin_link"),i=document.getElementById("capture_signout_link"),h=document.getElementById("capture_profile_link"),f=document.getElementById("capture_profileimage");
g.style.display="";
g.removeAttribute("hidden");
i.style.display="none";
i.setAttribute("hidden","");
h.style.display="none";
h.setAttribute("hidden","");
f.style.display="none";
f.setAttribute("hidden","")
};
b=function(){var f,g;
if(window.localStorage.profileImage&&window.localStorage.profileImage!==""){f=document.getElementById("capture_profileimage");
f.getElementsByTagName("img")[0].src=window.localStorage.profileImage;
f.style.display="";
f.removeAttribute("hidden");
if($("#edit_profileimage").length!==0){g=document.getElementById("edit_profileimage");
g.getElementsByTagName("img")[0].src=window.localStorage.profileImage;
g.style.display="";
g.removeAttribute("hidden")
}}};
a=function(){if($("#edit_profileimage").length!==0){var f=document.getElementById("edit_profileimage");
f.style.display="none";
f.setAttribute("hidden","")
}window.localStorage.profileImage=""
};
c=function(){if($("#resetPasswordRequestCode").length!==0){var f=document.getElementById("resetPasswordRequestCode");
f.style.display="none";
f.setAttribute("hidden","")
}};
return{showSignedInLinks:e,showSignedOutLinks:d,showProfileImage:b,hideProfileImage:a,hideResetPasswordRequestCode:c}
}());
var KO=KO||{};
KO.CookieManager=(function(){var e,a,d,b,c;
e=function(f){if(!f){return null
}return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(f).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null
};
a=function(i,l,h,g,f,j){var k="";
if(!i||/^(?:expires|max\-age|path|domain|secure)$/i.test(i)){return false
}if(h){switch(h.constructor){case Number:k=h===Infinity?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+h;
break;
case String:k="; expires="+h;
break;
case Date:k="; expires="+h.toUTCString();
break
}}document.cookie=encodeURIComponent(i)+"="+encodeURIComponent(l)+k+(f?"; domain="+f:"")+(g?"; path="+g:"")+(j?"; secure":"");
return true
};
d=function(h,g,f){if(!this.hasItem(h)){return false
}document.cookie=encodeURIComponent(h)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(f?"; domain="+f:"")+(g?"; path="+g:"");
return true
};
b=function(f){if(!f){return false
}return(new RegExp("(?:^|;\\s*)"+encodeURIComponent(f).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(document.cookie)
};
c=function(){var h,g=0,f=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/);
for(h=f.length;
g<h;
g+=1){f[g]=decodeURIComponent(f[g])
}return f
};
return{getItem:e,setItem:a,removeItem:d,hasItem:b}
}());
var OneKOID=window.OneKOID||{};
OneKOID.AuthControl=(function(){var a,b;
a=function(d){var c=new Date(),e=window.janrain.settings.capture.accessTokenLifeHours,g=e?e:0.5,f=location.protocol==="https:";
c.setTime(c.getTime()+g*3600000);
KO.CookieManager.setItem("ko_access_token",d,c,"/",document.domain,f);
window.sessionStorage.setItem("ko_access_token",d)
};
b=function(c){KO.CookieManager.removeItem("ko_access_token","/",document.domain);
window.sessionStorage.removeItem("ko_access_token")
};
return{createAccessTokenCookie:a,removeAccessTokenCookie:b}
}());
var OneKOID=window.OneKOID||{};
OneKOID.AuthAPIHelper=(function(){var l=false;
var r=false;
function p(){if(OneKOID.JanrainSettings.redirectOnLogin&&OneKOID.JanrainSettings.redirectUri!==""){location.href=OneKOID.JanrainSettings.redirectUri
}else{location.reload()
}}function s(){var u=OneKOID.JanrainSettings.janrainredirect,w=0,v={};
if(u){for(;
w<u.length;
w++){v[u[w].janrainnakeyvalue]=u[w].janrainnaredirecturl
}}return v
}function f(){if(l){return
}if(OneKOID.JanrainSettings.redirectOnSignOut!==""){location.href=OneKOID.JanrainSettings.redirectOnSignOut
}}function h(u){if(u&&u!==""){localStorage.profileImage=u
}}function n(y){var x,w,A=s(),u=false;
for(x in y){var v=x+":"+y[x];
for(w in A){if(v==w){var z=A[w];
u=true;
location.href=z;
break
}}}h(y.profileImage);
if(!u){p()
}}function k(z,x){var v=z.getResponseHeader("x-access-token"),u=JSON.parse(z.responseText);
OneKOID.AuthControl.createAccessTokenCookie(v);
var w=c(x);
var y;
if(!r){y=a(n,u)
}else{y=a(OneKOID.Events.publish,"ssoLogin",u)
}q(w,y)
}function q(v,u){if(v.match(/traditionalRegister|socialRegister/)){OneKOID.Events.publishSync("auth-api-registration-completed","",function(){u()
})
}else{u()
}}function a(v){var u=Array.prototype.slice.call(arguments,1);
return function(){var w=u.concat(Array.prototype.slice.call(arguments));
return v.apply(this,w)
}
}function c(v){var u=v.match(/action=([^&]+)/i);
return u[1]
}function t(){localStorage.removeItem("janrainLastAuthMethod");
localStorage.removeItem("janrainLastAuthMethod_Expires")
}function b(){var u=$("#login_failed_modal");
$(".login_loading_modal").hide();
u.appendTo("body").modal("show");
l=true;
janrain.capture.ui.endCaptureSession();
t()
}function g(u,v){return function(x,A,w){var y="/",z=u.indexOf(y,u.length-y.length)!==-1?u:u+"/";
if(w.url===z+"api/auth"){v(A,w.data)
}}
}function m(u){$(document).ajaxSuccess(g(u,k));
$(document).ajaxError(g(u,b))
}function o(u,v){$.ajax({type:"POST",url:u+"/api/onCaptureSessionEnded",success:function(w){console.log("Capture Session Ended returned the following ",w)
},failure:function(w){console.log("Capture Session Ended returned the following "+w)
},complete:function(){if(v){v()
}}})
}function j(u){var v=u.replace("http://","").replace("https://","").split("/")[0];
var w=location.href;
w=w.replace("http://","").replace("https://","").split("/")[0];
return w!=v&&v!==""
}function i(v,y,w){var x=new Date();
x.setTime(x.getTime()+(w*24*60*60*1000));
var u="expires="+x.toUTCString();
document.cookie=v+"="+y+"; "+u
}function d(){var u=document.referrer;
if(!u||u===""){u=location.href
}if(!window.sessionStorage.getItem("leadURL")||window.sessionStorage.getItem("leadURL")===""){window.sessionStorage.setItem("leadURL",u)
}if(j(u)){i("referrer",u,100)
}}function e(u){r=u
}return{endSession:o,handleAPIAuthentication:m,createLeadURLCookie:d,doRedirectOnSignOut:f,redirectUser:n,setSSO:e}
})();
var OneKOID=window.OneKOID||{};
OneKOID.FormUtility=(function(e){var b=e.janrain||{},a,d,h,g;
a=function(l){var m,k;
if($("#janrainModal:visible #changePassword").length){m=$("#janrainModal:visible #changePassword .capture_tip_error:not(:empty):visible:first");
k=m.parent()
}else{m=$(".capture_tip_error:not(:empty):visible:first");
k=m.parent()
}if(m){var j=m.text();
k.find("input:first, select:first").focus();
k.find("label:first").append('<span class="screenReaderContext">'+m.html()+"</span>");
var i=k.attr("class");
k.attr("class",i+" capture_error");
if(k.hasClass("state-wrapper")){m.text(j)
}if(m.html()&&m.html().indexOf("</a>")!==-1){setTimeout(function(){k.find("input:first, select:first").blur();
k.addClass("capture_error");
k.removeClass("capture_validated")
},1000)
}k.find("input:first, select:first").on("focusout",function(){if(k.parent().hasClass("survey-content")){return
}k.find("label:first").find(".screenReaderContext").remove();
k.removeClass("capture_error");
k.find("input:first, select:first").off("focusout");
if(k.hasClass("state-wrapper")){m.text("")
}})
}};
d=function(){var i;
if($("#janrainModal:visible:last").length){i=$("#janrainModal:visible:last").find("input:enabled:visible:first");
if(!i.length){i=$("#janrainModal:visible:last").find("a:visible:first")
}}else{if($("#returnTraditional:visible").length){i=$("#returnTraditional:visible").find("input:enabled:visible:first");
if(!i.length){i=$("#returnTraditional:visible").find("a:visible:first")
}}else{if($(".capture_editCol").length){i=$(".capture_editCol").find("input:enabled:visible:first");
if(!i.length){i=$(".capture_editCol").find("a:visible:first")
}}else{if($("#signin-regstration-body-background").length){i=$("#signin-regstration-body-background").find("input:enabled:visible:first");
if(!i.length){i=$("#signin-regstration-body-background").find("a:visible:first")
}}}}}if(i.length){i.focus()
}};
function c(){$("#janrainModal > a").on("click",function(){b.capture.ui.modal.close();
$("#janrainModal a.janrainModalClose").hide()
})
}function f(){var j=$("#janrainModal > img");
if((j.length>0)&&($("#janrainModal a.janrainModalClose img").length===0)){var i=$("#janrainModal a.janrainModalClose").length;
if(!i){$("#janrainModal").prepend('<a href="#" class="janrainModalClose" title="Close Modal">Close Modal</a>')
}$("#janrainModal > a").wrapInner(j);
c()
}$("#janrainModal a.janrainModalClose").show()
}h=function(k,m){var j=document.getElementById("change-email-confirmation-sent"),o=document.getElementById("change-email-confirmation-error"),i=location.protocol+"//"+location.host,l="/",n=k.indexOf(l,k.length-l.length)!==-1?k:k+"/";
j.style.display="none";
j.setAttribute("tabindex","-1");
o.style.display="none";
o.setAttribute("tabindex","-1");
$.ajax({url:n+"api/sendEncryptedEmail?emailLink="+i+m,method:"get",dataType:"json",headers:{"x-access-token":KO.CookieManager.getItem("ko_access_token")},success:function(q,r,p){console.log("success calling sendEncryptedEmail, status="+r,q);
j.style.display="block";
j.focus()
},error:function(p,r,q){console.log("error calling sendEncryptedEmail",r,q);
o.style.display="block";
o.focus()
}})
};
g=function(){var k=document.getElementsByClassName("janrain-provider-text-twitter"),j,i;
if(k.length){j=k[0].innerHTML;
i=j.split(" - ")
}};
return{focusOnError:a,focusOnFirstInput:d,createModalCloseLink:f,changeEmailScreen:h,shortenSocialName:g}
})(window);
var OneKOID=window.OneKOID||{};
OneKOID.Accessibility=(function(){var a,c,b;
a=function(d){var e;
if(d==="resetPasswordRequestCode"){e=$("#capture_resetPasswordRequestCode_traditionalSignIn_emailAddress");
if(!e.parent().find("label").length){e.parent().prepend('<label for="'+e.attr("id")+'">'+e.attr("placeholder")+"</label>")
}}};
c=function(){var d=$('.cq-verifyemail input[type!="submit"]:visible');
d.each(function(){var e=$(this);
if(!e.parent().find("label").length){e.parent().prepend('<label for="'+e.attr("id")+'">'+e.attr("placeholder")+"</label>")
}})
};
b=function(d,f,e){if(d===f&&e){$(".instructionsAccountInfo").addClass("screenReaderContext")
}};
return{addLabelToResetPasswordEmail:a,addLabelToVerifyRegistration:c,hideAccountInfoInstructions:b}
}());
var OneKOID=window.OneKOID||{};
OneKOID.LoginRegLink=OneKOID.LoginRegLink||{};
OneKOID.LoginRegLink.setupEventHandlers=function(){janrain.events.onCaptureSessionEnded.addHandler(function(a){OneKOID.AuthVisibility.hideProfileImage();
OneKOID.AuthVisibility.showSignedOutLinks();
OneKOID.AuthControl.removeAccessTokenCookie();
if(!OneKOID.JanrainSettings.isSSOEnabled){OneKOID.AuthAPIHelper.endSession(OneKOID.JanrainSettings.janrainnaapidomain,OneKOID.AuthAPIHelper.doRedirectOnSignOut)
}});
janrain.events.onCaptureSessionFound.addHandler(function(a){OneKOID.AuthVisibility.showSignedInLinks();
OneKOID.AuthVisibility.hideResetPasswordRequestCode();
OneKOID.AuthVisibility.showProfileImage()
});
janrain.events.onCaptureSessionNotFound.addHandler(function(a){OneKOID.AuthVisibility.hideProfileImage();
OneKOID.AuthVisibility.showSignedOutLinks()
})
};
var OneKOID=window.OneKOID||{};
OneKOID.Events={events:{},eventsSync:{},subscribe:function(a,b){OneKOID.Events.events[a]=OneKOID.Events.events[a]||[];
OneKOID.Events.events[a].push(b)
},subscribeSync:function(b,d,e){OneKOID.Events.eventsSync[b]=OneKOID.Events.eventsSync[b]||[];
var c=-1,a={fnName:e,fn:d};
OneKOID.Events.eventsSync[b].forEach(function(g,f){if(g.fnName===e){c=f
}});
if(c===-1){OneKOID.Events.eventsSync[b].push(a)
}else{OneKOID.Events.eventsSync[b][c]=a
}},unsubscribe:function(a,c){var b;
if(OneKOID.Events.events[a]){for(b=0;
b<OneKOID.Events.events[a].length;
b++){if(OneKOID.Events.events[a][b]===c){OneKOID.Events.events[a].splice(b,1);
break
}}}},publish:function(a,b){if(OneKOID.Events.events[a]){OneKOID.Events.events[a].forEach(function(c){c(b)
})
}},publishSync:function(a,c,d){if(OneKOID.Events.eventsSync[a]){var b=[];
OneKOID.Events.eventsSync[a].forEach(function(e){b.push(new window.Promise(function(g,f){e.fn(g,f)
}))
});
window.Promise.all(b).then(function(){d()
})
}}};