'use strict';
var ref = new Firebase("https://cepatsembuh.firebaseio.com");
var faskes;
var newFaskes;

function submitFaskes() {
  'use strict';
  // Get input value
  var nama = $('#nama').val();
  var tipe = $('#tipe').val();

  // If-else condition
  if (nama === '' || tipe === '') {
    alert('Input is not filled');
    return false;
  } else {
      switch (tipe) {
        case "puskesmas":
            // Faskes depedencies
            faskes = ref.child("puskesmas");
            faskesVariable = faskes.child("pasien")
            newFaskes = faskesVariable.child(nama);

            // Push data to firebase
            newFaskes.set({
              nama: nama
            })
          break;
        case "rsud":
            // Faskes depedencies
            faskes = ref.child("rsud");
            faskesVariable = faskes.child("pasien")
            newFaskes = faskesVariable.child(nama);

            // Push data to firebase
            newFaskes.set({
              nama: nama
            })
          break;
        case "rsuk":
            // Faskes depedencies
            faskes = ref.child("rsuk");
            faskesVariable = faskes.child("pasien")
            newFaskes = faskesVariable.child(nama);

            // Push data to firebase
            newFaskes.set({
              nama: nama
            })
          break;
        case "rss":
            // Faskes depedencies
            faskes = ref.child("rss");
            faskesVariable = faskes.child("pasien")
            newFaskes = faskesVariable.child(nama);

            // Push data to firebase
            newFaskes.set({
              nama: nama
            })
          break;
      }
    return true;
  }
}
