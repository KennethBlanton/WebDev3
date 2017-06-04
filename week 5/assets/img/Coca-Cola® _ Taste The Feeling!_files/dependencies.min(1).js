var OneKOID=window.OneKOID||{};
OneKOID.UrlBuilder=(function(){var b,a,c;
b=function(d){var e=d.startsWith("/")?d:"/"+d;
return location.protocol+"//"+location.hostname+(location.port?":"+location.port:"")+e
};
a=function(d){var e=new RegExp("^(?:[a-z]+:)?//","i");
return e.test(d)
};
c=function(d){if(!d){return
}if(a(d)){return d
}else{return b(d)
}};
return{getAbsoluteUrl:c}
}());