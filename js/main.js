window.onload = initializeData();

function initializeData() {
  var ref = new Firebase("https://cepatsembuh.firebaseio.com")
  var puskesmasRef = ref.child("puskesmas");
  var rsudRef = ref.child("rsud");
  var rsukRef = ref.child("rsuk");
  var rssRef = ref.child("rss");s
}
