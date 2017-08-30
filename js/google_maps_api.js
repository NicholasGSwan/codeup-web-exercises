(function(){
    "use strict";
    var mapOptions = {
        zoom: 18,
        center: {
            lat: 29.55423,
            lng: -98.536153
        }
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var geocoder = new google.maps.Geocoder();
    var restaurantAddress = "10003 NW Military Hwy, Ste 3101, San Antonio, TX 78231";
    geocoder.geocode({"address": restaurantAddress},function (results, status) {
        if (status == google.maps.GeocoderStatus.OK){
            map.setCenter(results[0].geometry.location);
            console.log(results[0].geometry.location.lat());
            console.log(results[0].geometry.location.lng())
        }else {
            alert("Geocoding was not successful - STATUS: " + status);
        }
    } );
    var PhoVNBistro = {
        lat: 29.554296,
        lng: -98.536372
    };
    var marker = new google.maps.Marker({
        position: PhoVNBistro,
        animation: google.maps.Animation.DROP,
        map: map
    });
    var infowindow = new google.maps.InfoWindow({
        content: "Pho VN Bistro. <br>  Yummy Vietnamese food! Their Vermicelli bowls are great!<br><a href=\"https://www.facebook.com/Pho-VN-Bistro-1644777712433182/\">Visit their facebook page for more info!</a>"
    });
    infowindow.open(map, marker)






})();