const latitudeElement = document.getElementById("js--latitude");
const longitudeElement = document.getElementById("js--longitude");

const successCallback = (position) => {
    const { latitude, longitude } = position.coords;
    latitudeElement.textContent = latitude;
    longitudeElement.textContent = longitude;
};

const errorCallback = (error) => {
    console.log(error);
};

const options = {
    enableHighAccuracy: true,
    timeout: 10000,
};

const geolocationObject = navigator.geolocation;

geolocationObject.getCurrentPosition(successCallback, errorCallback, options);

const id = geolocationObject.watchPosition(
    successCallback,
    errorCallback,
    options
);

geolocationObject.clearWatch(id);
