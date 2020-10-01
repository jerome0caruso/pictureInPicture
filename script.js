const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log("Errorrr");
    }
}

selectMediaStream();