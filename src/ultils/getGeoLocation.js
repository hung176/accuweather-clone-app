export function geoFindMe() {
  let latitude;
  let longitude;
  
  if (!navigator.geolocation){
   console.log("Geolocation is not supported by your browser");
    return;
  }
  function success(position) {
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
  }
  function error() {
    console.log("Unable to retrieve your location");
  }
  navigator.geolocation.getCurrentPosition(success, error);

  return { latitude, longitude };
}