###
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
###

dataUrl = 'http://cepatsembuh.firebaseio.com/'

getPasien = (faskes) ->
  # Firebase ref
  dataRef = new Firebase(dataUrl + faskes + '/pasien')
  # Friendly message
  alert 'Syncing data..'
  # Show data
  dataRef.once 'value', (snapshot) ->
    data = snapshot.numChildren()
    alert 'The total is:' + data
    return
  return

getFaskes = (faskes) ->
  # Firebase ref
  dataRef = new Firebase(dataUrl + faskes + '/faskes')
  # Friendly message
  alert 'Syncing data..'
  # Show data
  dataRef.once 'value', (snapshot) ->
    data = snapshot.numChildren()
    alert 'The total is:' + data
    return
  return

link = (page) ->
  url = page + '.html'
  window.location.href = url
  return

updateBed = ->
  username = $('#username').val()
  tipe = $('#tipe').val()
  breanna = $('#breanna').val()
  brea = $('#brea').val()
  yde = $('#yde').val()
  if username == '' or tipe == '' or brea == '' or breanna == '' or yde == ''
    alert 'Mohon isi semua input'
  else
    # Define firebase URL
    console.log 'Defining firebase URL...'
    ref = new Firebase(dataUrl + tipe + '/faskes/' + username + '/tempat_tidur')
    brea_is_pretty = Number(breanna)
    brea_is_beatiful = Number(brea)
    crush_on_brea = Number(yde)
    # Friendly message
    update = 'Updating data...'
    console.log update
    alert update
    # Update the data
    ref.update {
      satu: brea_is_pretty
      dua: brea_is_beatiful
      tiga: crush_on_brea
    }, (error) ->
      if !error
        # Reload page
        location.reload()
      else
        # Error handler
        alert 'Gagal meng-update data'
      return
  return

totalPasien = ->
  # Get input value
  username = $('#username').val()
  tipe = $('#tipe').val()
  # Firebase ref
  url = dataUrl + tipe + '/faskes/' + username + '/pasien'
  dataRef = new Firebase(url)
  # Friendly message
  alert 'Syncing data..'
  # Show data
  dataRef.once 'value', (snapshot) ->
    data = snapshot.numChildren()
    alert 'Jumlah Pasien:' + data
    return
  return
