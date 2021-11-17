#!/usr/bin/env node

// var BLYNK_TEMPLATE_ID = "TMPLugNX7UBq";
// var BLYNK_DEVICE_NAME = "Raspberry Pi ClumzyaziD";

var Blynk = require('blynk-library');

var AUTH = 'E0otAVUJgmidEnUzN6CMT72Z8p4NCP1M';

var blynk = new Blynk.Blynk(AUTH);

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
