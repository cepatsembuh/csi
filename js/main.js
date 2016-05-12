/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/
var dataUrl = 'https://cepatsembuh.firebaseio.com/';

function getPasien(faskes) {
  // Firebase ref
  var dataRef = new Firebase(dataUrl + faskes + '/pasien');

  // Friendly message
  alert('Syncing data..');

  // Show data
  dataRef.once('value', function(snapshot) {
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
  dataRef.once('value', function(snapshot) {
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
      breanna = $('#breanna').val(),
      brea = $('#brea').val(),
      yde = $('#yde').val();

  if (username === '' || tipe === '' || brea === '' || breanna === '' || yde === '') {
    alert('Mohon isi semua input');
  } else {
    // Define firebase URL
    console.log('Defining firebase URL...');
    var ref = new Firebase(dataUrl + tipe + '/faskes/' + username + '/tempat_tidur'),
        brea_is_pretty = Number(breanna),
        brea_is_beatiful = Number(brea),
        crush_on_brea = Number(yde);

    // Friendly message
    update = 'Updating data...';
    console.log(update);
    alert(update);

    // Update the data
    ref.update({
      satu: brea_is_pretty,
      dua: brea_is_beatiful,
      tiga: crush_on_brea
    }, function(error){
      if (!error) {
        // Reload page
        location.reload();
      } else {
        // Error handler
        alert('Gagal meng-update data')
      }
    });
  }
}

function totalPasien() {
  // Get input value
  var username = $('#username').val(),
      tipe = $('#tipe').val();

  // Firebase ref
  var url = dataUrl + tipe + '/faskes/' + username + '/pasien';
  var dataRef = new Firebase(url);

  // Friendly message
  alert('Syncing data..');

  // Show data
   dataRef.once('value', function(snapshot) {
    var data = snapshot.numChildren();
    alert('Jumlah Pasien:' + data);
  });
}
