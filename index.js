alert("Hallo iedereen, alles wordt klaargemaakt");

const onDeviceReady = () => {
    alert("Klaar")
    navigator.camera.getPicture()
};

document.addEventListener("deviceready", onDeviceReady, false);