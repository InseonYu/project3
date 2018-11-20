function initMap() {
  // The location of Uluru
  var home1 = {lat: 37.4988072, lng : 126.5327613};
  var home2 = {lat: 36.7746063, lng : 126.4661203};
  var home3 = {lat: 36.6290121, lng : 127.4552537};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 7.5, center: home1});
  // The marker, positioned at Uluru
  var marker1 = new google.maps.Marker({position: home1, map: map});
  var marker2 = new google.maps.Marker({position: home2, map: map});
  var marker3 = new google.maps.Marker({position: home3, map: map});
}