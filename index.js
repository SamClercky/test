alert("Hallo iedereen, alles wordt klaargemaakt");

document.addEventListener("deviceready", () => {
    alert("Klaar")
    navigator.camera.getPicture()
}, false);
