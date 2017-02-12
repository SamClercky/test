document.addEventListener("deviceready", () => {
    alert(navigator.camera)
    navigator.camera.getPicture()
})