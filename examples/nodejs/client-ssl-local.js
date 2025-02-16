#!/usr/bin/env node

var Blynk = require('blynk-library');

var AUTH = 'W84d5Pbe1B2PFwWVn9EdrlEgZHRS2Ky2';

var blynk = new Blynk.Blynk(AUTH,
  options= { addr:"127.0.0.1", port:9443 }
);

var v1 = new blynk.VirtualPin(1);
var v9 = new blynk.VirtualPin(9);

v1.on('write', function(param) {
  console.log('V1:', param);
});

v9.on('read', function() {
  v9.write(new Date().getSeconds());
});

blynk.on('connect', function() { console.log("Blynk ready."); });
blynk.on('disconnect', function() { console.log("DISCONNECT"); });
