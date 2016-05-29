/**
 * Created by valentin on 29/05/16.
 */

var map;
var myCenter=new google.maps.LatLng(51.508742,-0.120850);

function initialize()
{
    var mapProp = {
        center:myCenter,
        zoom:5,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
    });
}

function placeMarker(location) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var myArr = JSON.parse(xhttp.responseText);
            marker(myArr);
        }
    };
    var long = location.lng();
    var lat = location.lat();
    xhttp.open("GET", "https://api.what3words.com/position?key=JGC97SXG&lang=en&position=" + long + "," +lat , true);
    xhttp.send();

function marker(arr) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
    });
    var infowindow = new google.maps.InfoWindow({
        content: arr.words[0] + '<br>'+arr.words[1] + '<br>' + arr.words[2]
    });
    infowindow.open(map,marker);
}
}

google.maps.event.addDomListener(window, 'load', initialize);