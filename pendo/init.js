(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

        // This function creates visitors and accounts in Pendo
        // You will need to replace <visitor-id-goes-here> and <account-id-goes-here> with values you use in your app
        // Please use Strings, Numbers, or Bools for value types.
        pendo.initialize({
            visitor: {
                id: "darshan@echelonsynergy.com",
                email: "echelonsynergy@protonmail.com",
                firstName: "Darshan",
                lastName: "Hulswar",
                full_name: "Darshan Hulswar",
                birthDate: "1999-11-28",
                tags: ["Senior Engineer"],
                creationDate: "2024-08-23T15:08:11+05:30",
                applicableRuleIds: ["128HJ", "129AA", "130IK", "131LK", "240LL"],
                numericList: [400, 500, 600, 700, 800],
                uniqueClientId: 99294858,
                serverUrl: "https://echelonsynergy.netlify.app",
            },
        
            account: {
                id: "echelonsynergy",
                name: "Echelon Synergy",
                monthly_value: 20000,
                is_paying: true,
                tags: ["enterprise"],
                domain: "echelonsynergy.com",
            },            
        });
})('43994d6b-66ea-49fc-71f1-31077e387150');

// Start of Async Drift Code
"use strict";

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('d78t5n79wnmf');

drift.on('ready', function(api, payload) {
  api.identify({
    email: "darshan@echelonsynergy.com",
    name: 'Darshan Hulswar',    
    userId: 'DH-20240911-001'             
  });
});