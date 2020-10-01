const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream() {
    try {
        //waiting to assign until user selects screem/window to share
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        //passing that data into video object as its source
        videoElement.srcObject = mediaStream;
        //when video loads meta data then play
        videoElement.onloadloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log("Errorrr");
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})

selectMediaStream();