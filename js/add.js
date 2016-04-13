'use strict';
var ref = new Firebase("https://cepatsembuh.firebaseio.com");
var faskes;
var newFaskes;

function submitFaskes() {
  'use strict';
  var nama = $('#nama').val();
  var tipe = $('#tipe').val();

  switch (tipe) {
    case "puskesmas":
        faskes = ref.child("puskesmas");
        faskesVariable = faskes.child("pasien")
        newFaskes = faskesVariable.child(nama);

        newFaskes.set({
          nama: nama
        })
      break;
    default:

  }
}
