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

function getFaskes(faskes) {
  'use strict';
  var dataRef = new Firebase(dataUrl + faskes + '/faskes');
  alert('Syncing data..');
  dataRef.once("value", function(snapshot) {
    var data = snapshot.numChildren();
    alert('The total is:' + data);
    console.log('Url: ' + ref);
  });
}

function link(page) {
  var url = page + '.html';
  window.location.href = url;
}

function updateBed() {
  var username = $('#username').val(),
      tipe = $('#tipe').val(),
      data = $('#avicii').val();

  console.log('Defining firebase URL...');
  var ref = new Firebase(dataUrl + tipe + '/faskes/' + username),
      unString = Number(data);

  console.log('Updating data...');
  ref.update({
    tempat_tidur: unString
  })
}
