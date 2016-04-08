window.onload = initializeData();

function initializeData() {
  var ref = new Firebase("https://cepatsembuh.firebaseio.com")  
}

function getData(faskes) {
  var ref = new Firebase("https://cepatsembuh.firebaseio.com/" + faskes + '/pasien');
}
