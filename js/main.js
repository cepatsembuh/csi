function getData(faskes) {
  var ref = new Firebase("https://cepatsembuh.firebaseio.com/" + faskes + '/pasien');
  alert('Syncing data..');
  ref.once("value", function(snapshot) {
    var data = snapshot.numChildren();
    alert('The total is:' + data);
    console.log('Url: ' + ref);
  });
}
