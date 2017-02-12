alert("Hallo iedereen, alles wordt klaargemaakt");

document.addEventListener("deviceready", onDeviceReady, false);

const onDeviceReady = () => {
    alert("Klaar")
    navigator.camera.getPicture()
};
