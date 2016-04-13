'use strict';
var ref = new Firebase("https://cepatsembuh.firebaseio.com");
var faskes;
var newFaskes;

function submitFaskes() {
  'use strict';
  var nama = $('#nama').val();
  var tipe = $('#tipe').val();

  if (nama === '' || tipe === '') {
    alert('Input is not filled');
    return false;
  } else {
      switch (tipe) {
        case "puskesmas":
            faskes = ref.child("puskesmas");
            faskesVariable = faskes.child("pasien")
            newFaskes = faskesVariable.child(nama);

            newFaskes.set({
              nama: nama
            })
          break;
        case "rsud":
            faskes = ref.child("rsud");
            faskesVariable = faskes.child("pasien")
            newFaskes = faskesVariable.child(nama);

            newFaskes.set({
              nama: nama
            })
          break;
        case "rsuk":
            faskes = ref.child("rsuk");
            faskesVariable = faskes.child("pasien")
            newFaskes = faskesVariable.child(nama);

            newFaskes.set({
              nama: nama
            })
          break;
        case "rss":
            faskes = ref.child("rss");
            faskesVariable = faskes.child("pasien")
            newFaskes = faskesVariable.child(nama);

            newFaskes.set({
              nama: nama
            })
          break;
      }
    return true;
  }
}
