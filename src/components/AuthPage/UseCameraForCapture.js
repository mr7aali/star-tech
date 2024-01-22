import React, { useEffect, useRef, useState } from 'react';

const UseCameraForCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const capturedPhotoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedPhotoDataUrl, setCapturedPhotoDataUrl] = useState(null);



  

  useEffect(() => {
    startCamera();
    return () => {
     
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };


  }, [capturedPhotoDataUrl]); 

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      // Draw the current video frame onto the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      // Convert the canvas content to a data URL (base64-encoded image)
      const photoDataUrl = canvas.toDataURL('image/png');
      // Update state with the captured photo data URL
      setCapturedPhotoDataUrl(photoDataUrl);
      // Hide the video element
      video.style.display = 'none';
    }
  };

  const savePhoto = () => {
    
    alert('Photo saved!');
  };
  const startCamera = async () => {
    try {
      const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(cameraStream);
      if (videoRef.current) {
        videoRef.current.srcObject = cameraStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };


  return (
    <div>

      {capturedPhotoDataUrl ? (
        <>

          <img src={capturedPhotoDataUrl} alt="Captured Photo" />
          <div className='flex justify-between'>
            <button onClick={savePhoto}>Save Photo</button>
            <button onClick={() => {
              setCapturedPhotoDataUrl(null)
            }}>Recapture</button>
          </div>
        </>
      ) : (
        <>
          <video ref={videoRef} width="640" height="480" autoPlay />
          <button style={{ border: "1px solid red" }} onClick={capturePhoto}>Capture Photo</button>
          <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
        </>
      )}
    </div>
  );
};

export default UseCameraForCapture;


