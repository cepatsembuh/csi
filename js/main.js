/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/
var dataUrl = "https://cepatsembuh.firebaseio.com/";

function getPasien(faskes) {
  // Firebase ref
  var dataRef = new Firebase(dataUrl + faskes + '/pasien');

  // Friendly message
  alert('Syncing data..');

  // Show data
  dataRef.once("value", function(snapshot) {
    var data = snapshot.numChildren();
    alert('The total is:' + data);
  });
}

function getFaskes(faskes) {
  // Firebase ref
  var dataRef = new Firebase(dataUrl + faskes + '/faskes');

  // Friendly message
  alert('Syncing data..');

  // Show data
  dataRef.once("value", function(snapshot) {
    var data = snapshot.numChildren();
    alert('The total is:' + data);
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

  if (username === '' || tipe === '' || data === '') {
    alert("Mohon isi semua input");
  } else {
    // Define firebase URL
    console.log('Defining firebase URL...');
    var ref = new Firebase(dataUrl + tipe + '/faskes/' + username),
        unString = Number(data);

    // Friendly message
    console.log('Updating data...');
    alert('Updating data...');

    // Update the data
    ref.update({
      tempat_tidur: unString
    }, function(error){
      if (!error) {
        // Reload page
        location.reload();
      }
    });
  }
}
