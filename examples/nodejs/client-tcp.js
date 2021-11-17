#!/usr/bin/env node
var BLYNK_TEMPLATE_ID = "TMPL-qY9d2Sm";
var BLYNK_DEVICE_NAME = "Quickstart Template";
var BLYNK_AUTH_TOKEN = "fGyuiZ4ous1Ud8E7BCVvymMI8HvU-wTe";

var Blynk = require('blynk-library');

var AUTH = 'W84d5Pbe1B2PFwWVn9EdrlEgZHRS2Ky2';

// var AUTH = 'fGyuiZ4ous1Ud8E7BCVvymMI8HvU-wTe'; // blynk.io cloud token

var blynk = new Blynk.Blynk(AUTH, options = {
  connector : new Blynk.TcpClient()
});

var v1 = new blynk.VirtualPin(1);

var v2 = new blynk.VirtualPin(2);

v1.on('write', function(param) {
  console.log('V1:', param);
});

v2.on('read', function() {
  var time = new Date().getSeconds();
  v2.write(time);
  console.log('currenttime:',time);

});

blynk.on('connect', function() { console.log("Blynk ready."); });
blynk.on('disconnect', function() { console.log("DISCONNECT"); });
