
function initMap() {
  
    var uluru = {lat: 46.3211396, lng: 48.0195602};
    var  image = 'img/icon/marker.svg';
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17,
           center: uluru});
    
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      animation: google.maps.Animation.BOUNCE,
      icon: image
      
  });
  }

 