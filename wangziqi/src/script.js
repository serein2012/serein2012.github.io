// The value for 'accessToken' begins with 'pk...'

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2VyZWluMjAxMiIsImEiOiJjbGQwYWY5OTYwajFmM3Bxb21ocTNqbGRxIn0.E3d6HsyWJAYr08QCMQs4eg";

// Define a map object by initialising a Map from Mapbox
const map = new mapboxgl.Map({
  container: "map",
  // Replace YOUR_STYLE_URL with your style URL.
  style: "mapbox://styles/serein2012/cldhmeiyh001801o6g8s30pd5"
});
map.on("mousemove", (event) => {
  const dzone = map.queryRenderedFeatures(event.point, {
    layers: ["conservation-areas"]
  });
  document.getElementById("pd").innerHTML = dzone.length
    ? `<h3>${dzone[0].properties.Name}</h3><p>Area: <strong>${Math.round(
        dzone[0].properties.Shapearea
      )}</strong> square metres</p >`
    : `<p>Hover over a data zone!</p >`;
  map.getSource("hover").setData({
    type: "FeatureCollection",
    features: dzone.map(function (f) {
      return { type: "Feature", geometry: f.geometry };
    })
  });
});
map.on("load", () => {
  map.addSource("hover", {
    type: "geojson",
    data: { type: "FeatureCollection", features: [] }
  });
  map.addLayer({
    id: "dz-hover",
    type: "line",
    source: "hover",
    layout: {},
    paint: {
      "line-color": "black",
      "line-width": 3
    }
  });
  //the rest of the code will go in here
});
map.addControl(new mapboxgl.NavigationControl(), "top-left");
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
  }),
  "top-left"
);
const geocoder = new MapboxGeocoder({
  // Initialize the geocoder
  accessToken: mapboxgl.accessToken, // Set the access token
  mapboxgl: mapboxgl, // Set the mapbox-gl instance
  marker: false, // Do not use the default marker style
  placeholder: "Search for places in Edinburgh", // Placeholder text for the search bar
  proximity: {
    longitude: 55.8642,
    latitude: 4.2518
  } // Coordinates of Edinburgh center
});

map.addControl(geocoder, "top-left");
const list = [
  {
    name: "New Town",
    area: 3292314
  },
  {
    name: "Inverleith",
    area: 1958238
  },
  {
    name: "Colinton",
    area: 1647005
  },
  {
    name: "Grange",
    area: 1376331
  },
  {
    name: "Leith",
    area: 1365398
  },
  {
    name: "Marchmont, Meadows & Bruntsfield",
    area: 1346488
  },
  {
    name: "Duddingston",
    area: 1310786
  },
  {
    name: "Craiglockhart Hills",
    area: 1100612
  },
  {
    name: "Old Town",
    area: 1094463
  },
  {
    name: "Merchiston and Greenhill",
    area: 1076204
  },
  {
    name: "Swanston",
    area: 1030969
  },
  {
    name: "Portobello",
    area: 912019
  },
  {
    name: "Cramond",
    area: 713231
  },
  {
    name: "Queensferry",
    area: 707631
  },
  {
    name: "South Side",
    area: 699625
  },
  {
    name: "Morningside",
    area: 594229
  },
  {
    name: "Craigmillar Park",
    area: 589389
  },
  {
    name: "Coltbridge and Wester Coates",
    area: 512128
  },
  {
    name: "Trinity",
    area: 447566
  },
  {
    name: "Dean",
    area: 433005
  },
  {
    name: "Plewlands",
    area: 412343
  },
  {
    name: "West Murrayfield",
    area: 379863
  },
  {
    name: "Morton Mains",
    area: 366935
  },
  {
    name: "Balerno",
    area: 361815
  },
  {
    name: "Juniper Green",
    area: 334373
  },
  {
    name: "Victoria Park",
    area: 287789
  },
  {
    name: "Blacket",
    area: 277055
  },
  {
    name: "Pilrig",
    area: 273630
  },
  {
    name: "Barnton Avenue",
    area: 270026
  },
  {
    name: "West End",
    area: 262168
  },
  {
    name: "Corstorphine",
    area: 259534
  },
  {
    name: "Newhaven",
    area: 225878
  },
  {
    name: "Currie",
    area: 222596
  },
  {
    name: "Kirkliston",
    area: 219603
  },
  {
    name: "Ratho",
    area: 208239
  },
  {
    name: "Waverley Park",
    area: 199274
  },
  {
    name: "Hermiston",
    area: 137761
  },
  {
    name: "Gilmerton",
    area: 121054
  },
  {
    name: "Dalmeny",
    area: 88076
  },
  {
    name: "Shandon",
    area: 75069
  },
  {
    name: "Thistle Foundation",
    area: 53799
  },
  {
    name: "Stockbridge Colonies",
    area: 33931
  },
  {
    name: "Slateford (Flowers)",
    area: 26900
  },
  {
    name: "Abbeyhill Colonies",
    area: 26715
  },
  {
    name: "Lochend (Restalrig Park) Colonies",
    area: 17670
  },
  {
    name: "Dalry Colonies",
    area: 11428
  },
  {
    name: "Restalrig",
    area: 6270
  },
  {
    name: "Hawthornbank (North Fort Street) Colonies",
    area: 6196
  },
  {
    name: "Shaw's Place (Pilrig) Colonies",
    area: 6188
  },
  {
    name: "Rosebank Colonies",
    area: 4057
  }
];
const closeDom = document.createElement("div");
closeDom.innerHTML = `<div id='close'>×
          </div>`;
document.getElementById("panel").appendChild(closeDom);

const headerDom = document.createElement("div");
headerDom.innerHTML = `<div class='item'>
          <div class='title name'>Name</div>
          <div class='title value'>Area</div>
          </div>`;
document.getElementById("panel").appendChild(headerDom);

list.forEach((s) => {
  let itemDom = document.createElement("div");
  itemDom.innerHTML = `<div class='item'>
          <div class='name' title=${s.name}>${s.name}</div>
          <div class='value'>${s.area} m²</div>
          </div>`;
  document.getElementById("panel").appendChild(itemDom);
});
document.getElementById("show-list").addEventListener("click", () => {
  this.show = true;
  document.getElementById("panel").className = "show";
});
document.getElementById("close").addEventListener("click", () => {
  this.show = false;
  document.getElementById("panel").classList.remove("show");
});
