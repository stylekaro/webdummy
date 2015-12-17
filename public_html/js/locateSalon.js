/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(22.5667, 88.3667),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var locations = [
        ['Salon A', 22.569, 88.386, 1],
        ['Salon B', 22.551, 88.358, 2],
        ['Salon C', 22.575, 88.353, 3],
        ['Salon D', 22.528, 88.351, 4]
    ];
    var infowindow = new google.maps.InfoWindow;

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

google.maps.event.addDomListener(window, 'load', initialize);

