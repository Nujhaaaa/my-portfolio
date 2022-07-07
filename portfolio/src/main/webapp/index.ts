// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

function initMap(): void {
  const uluru = { lat: 30, lng: 170 };
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 2,
      center: uluru,
    }
  );

  const contentString =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<h3 id="firstHeading" class="firstHeading">NEW YORK</h3>' +
  '<div id="bodyContent">' +
  "<p><b> New York </b> is now my home away from home. After living all my life in Bangladesh, I moved to Ny at the end of 2019. Besides having most of my family here, the diversity, culture, bustling atmospheere, and ample opportunities of NY, have made it a place very special to me. </p>" +
  '<p> <a href="https://youtu.be/MRAZ_mSLXrA">' +
  "https://youtu.be/MRAZ_mSLXrA</a> " +

  "</div>" +
  "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const marker = new google.maps.Marker({
    position: { lat: 40.7288618, lng: -73.687333 },
    map,
    title: "HOME",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });

  const contentStr =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<h3 id="firstHeading" class="firstHeading">CHARLOTTESVILLE<, VA</h3>' +
  '<div id="bodyContent">' +
  "<p>I currently study at the University of Virginia and live most of the year in <b> Charlottesville, Virginia</b>. Nestled among mountains, just a short drive away from Shenandoah and Blue ride mountains and beautiful orchards, UVA has quickly stopped being just a location on the map and transformed to one of the few places I call home.</p>" +
  '<p><a href="https://youtu.be/aQ0QhUX0634">' +
  "https://youtu.be/aQ0QhUX0634</a> " 
  "</div>" +
  "</div>";

  const infowindoww = new google.maps.InfoWindow({
    content: contentStr,
  });

  const markerr = new google.maps.Marker({
    position: { lat: 38.0410576, lng:-78.5054996 },
    map,
    title: "COLLEGE",
  });

  markerr.addListener("click", () => {
    infowindoww.open({
      anchor: markerr,
      map,
      shouldFocus: false,
    });
  });

  
  const contentStr2 =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<h3 id="firstHeading" class="firstHeading">SYLHET, BANGLADESH</h3>' +
  '<div id="bodyContent">' +
  "<p>I was born and raised in a small city called <b> Syllhet </b> in a South Asian country called <b>Bangladesh</b>. A city bragging of a picturesque landscape, Sylhet is famous for its unique culture, tea gardens, hills, rivers, shrines, and different ethnic tribes. I went to a small (my graduating class had 26 people - the same bunch I went to school with since kindergarten) private school called Anandaniketan from kindergarten through highschool. Check out the link below to catch a glimpse of the natural beauty of Sylhet!</p>" +
  '<p> <a href="https://youtu.be/vY7n5wct9Zk">' +
  "https://youtu.be/vY7n5wct9Zk</a> "
  "</div>" +
  "</div>";

  const infowindow2 = new google.maps.InfoWindow({
    content: contentStr2,
  });

  const marker2 = new google.maps.Marker({
    position: { lat: 24.4932874, lng: 91.7085743 },
    map,
    title: "HOME COUNTRY",
  });

  marker2.addListener("click", () => {
    infowindow2.open({
      anchor: marker2,
      map,
      shouldFocus: false,
    });
  });

}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;