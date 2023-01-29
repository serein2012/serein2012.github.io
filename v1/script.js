// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2VyZWluMjAxMiIsImEiOiJjbGQwYWY5OTYwajFmM3Bxb21ocTNqbGRxIn0.E3d6HsyWJAYr08QCMQs4eg";

// Define a map object by initialising a Map from Mapbox
const map = new mapboxgl.Map({
  container: "map",
  // Replace YOUR_STYLE_URL with your style URL.
  style: "mapbox://styles/serein2012/cldhmeiyh001801o6g8s30pd5"
});