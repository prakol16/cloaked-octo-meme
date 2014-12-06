function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(38.9, -94.5),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    createMarkers(map);
}

function createMarkers(map) {
    $.getJSON("find/outbreaks.json")
    .success(function(data) {
        var outbreaks = data.outbreaks;
        for (var i = 0; i < outbreaks.length; ++i) {
            createMarkerAt(outbreaks[i]).setMap(map);
        }
    })
}

function createMarkerAt(data) {
    var marker = new google.maps.Marker({
        title: "Ebola case",
        position: new google.maps.LatLng(data.location[0], data.location[1]),
        icon: "find/disease.png"
    });
    return marker;
}

window.addEventListener("load", function() {
    initialize();
}, false);
