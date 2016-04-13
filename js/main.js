/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/
'use strict';
var dataUrl = "https://cepatsembuh.firebaseio.com/"

function getPasien(faskes) {
  'use strict';
  var dataRef = new Firebase(dataUrl + faskes + '/pasien');
  alert('Syncing data..');
  dataRef.once("value", function(snapshot) {
    var data = snapshot.numChildren();
    alert('The total is:' + data);
    console.log('Url: ' + ref);
  });
}
