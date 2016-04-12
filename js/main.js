/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/
'use strict';
var ref = new Firebase("https://cepatsembuh.firebaseio.com/");

function getData(faskes) {
  'use strict';
  dataRef = new Firebase(ref + faskes + '/pasien');
  alert('Syncing data..');
  ref.once("value", function(snapshot) {
    var data = snapshot.numChildren();
    alert('The total is:' + data);
    console.log('Url: ' + ref);
  });
}
