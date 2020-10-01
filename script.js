const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream() {
    try {
        //waiting to assign until user selects screem/window to share pop-up
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        //passing that data into video object as its source
        videoElement.srcObject = mediaStream;
        //when video loads meta data then play
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.error("Error: Can't locate video");
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();