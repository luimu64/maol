Sydney.debug=function(){return{init:function(){var a="";window.location.hash&&(a=window.location.hash.substring(1));-1!==a.indexOf("test-ios-scroll")&&(Sydney.globals.supportsWebkitOverflowScrolling=!0);-1!==a.indexOf("test-old-browsers")&&(Sydney.globals.forceScrollPolyfill="force-disable");-1!==a.indexOf("force-scroll-polyfill")&&(Sydney.globals.forceScrollPolyfill=!0)}}}();
