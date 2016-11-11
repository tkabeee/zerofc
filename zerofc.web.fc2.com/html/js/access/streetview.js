var arrowIcon = new GIcon();
arrowIcon.iconSize = new GSize(24, 24);
arrowIcon.shadowSize = new GSize(1, 1);
arrowIcon.iconAnchor = new GPoint(12, 12);
arrowIcon.infoWindowAnchor = new GPoint(0, 0);
arrowIcon.image = "http://www.google.com/intl/en_ALL/mapfiles/dir_0.png";
var mapst = new GMap2(document.getElementById("mapst"));
//mapst.addControl(new GLargeMapControl());
mapst.addControl(new GLargeMapControl());
//var position = new GControlPosition(G_ANCHOR_TOP_RIGHT, new GSize(7, 30));
mapst.addControl(new GOverviewMapControl());
//mapst.addControl(new GMenuMapTypeControl(), position);
mapst.addControl(new GMenuMapTypeControl());
//mapst.addControl(new GNavLabelControl());

//var position2 = new GControlPosition(G_ANCHOR_TOP_LEFT, new GSize(120,60));
//mapst.addControl(new GScaleControl(),position2);
mapst.enableScrollWheelZoom();   
//mapst.addMapType(G_SATELLITE_3D_MAP);
//mapst.addMapType(G_PHYSICAL_MAP);
//mapst.enableGoogleBar();

var latlng = new GLatLng(34.654143, 133.903137);
var stvlatlng = new GLatLng(34.653917, 133.903125);
mapst.setCenter(latlng, 16);
var myPov = { yaw: 6, pitch: 3 };

//Markerの設置
var marker = new GMarker(latlng);
mapst.addOverlay(marker);

//Marker追加(JR北長瀬駅)
var marker2 = new GMarker(new GLatLng(34.653028, 133.885547));
mapst.addOverlay(marker2);
 
//Marker追加(JR岡山駅)
var marker3 = new GMarker(new GLatLng(34.666369, 133.918588));
mapst.addOverlay(marker3);


mapst.setMapType(G_NORMAL_MAP); 

var svp = new GStreetviewPanorama(document.getElementById("panoramast"));
svp.setLocationAndPOV(stvlatlng, myPov); //this initializes the the street view panorama
var arrow = new GMarker(new GLatLng(90, 0), { icon: arrowIcon });
mapst.addOverlay(arrow);
arrow.setLatLng(latlng);

var lastPoint;
GEvent.addListener(mapst, "click", function(overlay, point) {
    if (!overlay) {
        svp.remove();
        svp.setLocationAndPOV(point);
        arrow.setLatLng(point);
        lastPoint = point;
    }
});

var overlayInstance = null;

function toggleOverlay() {
    if (!overlayInstance) {
		overlayInstance = new GStreetviewOverlay();
        mapst.addOverlay(overlayInstance);
　  } else {
        mapst.removeOverlay(overlayInstance);
        overlayInstance = null;
　　}
} 

function openWindow(lat, lng, name, filename) {
  var latlng = new GLatLng(lat, lng);
  var html;
  if (filename != 'nowprinting') {
    html = "<p style='padding:3px 0; text-align:center;'><img src='/img/access/" + filename + ".jpg' width='180' /></p><p style='text-align:center;'>" + name + "</p>";
  } else {
    html = "<p style='padding:3px 0; text-align:center;'><img src='/img/access/nowprinting.png' width='180' /></p><p style='text-align:center;'>" + name + "</p>";
  }
  
  mapst.setCenter(new GLatLng(lat, lng), 16);
  mapst.openInfoWindowHtml(latlng, html);
}

//クリックイベント
GEvent.addListener(marker, "click", function() {
	//marker.openInfoWindow(document.createTextNode("ゼロ戦クラブ"));
	openWindow('34.654143', '133.903137', 'ゼロ戦クラブ', 'zerosen');
});

GEvent.addListener(marker2, "click", function() {
	//marker2.openInfoWindow(document.createTextNode("北長瀬駅"));
	openWindow('34.653028', '133.885547', '北長瀬駅', 'nowprinting');
});

GEvent.addListener(marker3, "click", function() {
	//marker3.openInfoWindow(document.createTextNode("岡山駅"));
	openWindow('34.666369', '133.918588', '岡山駅', 'jr_okayama');
});


GEvent.addListener(svp, "yawchanged", function(yaw) {
	var dir = Math.round(yaw / 3) * 3;
    while (dir >= 120) { dir -= 120; }
    arrow.setImage("http://www.google.com/intl/en_ALL/mapfiles/dir_" + dir + ".png");
    document.getElementById("txtYaw").value = yaw;
});

GEvent.addListener(svp, "pitchchanged", function(pitch) {
    document.getElementById("txtPitch").value = pitch;
});

GEvent.addListener(svp, "zoomchanged", function(zoom) {
    document.getElementById("txtZoom").value = zoom;
});

GEvent.addListener(svp, "initialized", function(a) {
    arrow.setLatLng(a.latlng);
    mapst.addOverlay(new GPolyline([lastPoint, a.latlng]));
    lastPoint = a.latlng;
});

