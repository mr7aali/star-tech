import React, { useEffect, useRef, useState } from "react";
import { FaCamera, FaSave, FaRedo } from "react-icons/fa";

const UseCameraForCapture = ({ onSavePhoto }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedPhotoDataUrl, setCapturedPhotoDataUrl] = useState(null);
  const [cameraError, setCameraError] = useState(null);

  useEffect(() => {
    startCamera();
    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [capturedPhotoDataUrl]);

  const startCamera = async () => {
    try {
      const cameraStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(cameraStream);
      if (videoRef.current) {
        videoRef.current.srcObject = cameraStream;
        setCameraError(null);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      setCameraError("Unable to access camera. Please check permissions.");
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const photoDataUrl = canvas.toDataURL("image/png");
      setCapturedPhotoDataUrl(photoDataUrl);
    }
  };

  const savePhoto = () => {
    if (capturedPhotoDataUrl && onSavePhoto) {
      onSavePhoto(capturedPhotoDataUrl);
      alert("Photo saved!"); // Placeholder; replace with actual form integration
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {cameraError ? (
        <div
          className="w-full max-w-[240px] aspect-video rounded-md p-4 flex items-center justify-center text-center"
          style={{
            backgroundColor: "rgba(55, 73, 187, 0.1)",
            borderColor: "#ef4a23",
            borderWidth: "1px",
          }}
        >
          <p className="text-xs" style={{ color: "#ef4a23" }}>
            {cameraError}
          </p>
        </div>
      ) : capturedPhotoDataUrl ? (
        <div className="w-full max-w-[240px] flex flex-col items-center gap-3">
          <img
            src={capturedPhotoDataUrl}
            alt="Captured profile photo"
            className="w-full max-w-[240px] aspect-video object-cover rounded-md shadow-sm"
          />
          <div className="flex justify-center w-full gap-2">
            <button
              onClick={savePhoto}
              className="flex items-center gap-1.5 px-2.5 xs:px-3 py-1 xs:py-1.5 text-[10px] xs:text-xs sm:text-sm font-medium rounded-md hover:bg-red-600 hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-[#ef4a23]"
              style={{ backgroundColor: "#ef4a23", color: "#fff" }}
              aria-label="Save photo"
            >
              <FaSave className="text-[10px] xs:text-xs" />
              Save
            </button>
            <button
              onClick={() => setCapturedPhotoDataUrl(null)}
              className="flex items-center gap-1.5 px-2.5 xs:px-3 py-1 xs:py-1.5 text-[10px] xs:text-xs sm:text-sm font-medium rounded-md hover:bg-blue-800 hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-[#3749bb]"
              style={{ backgroundColor: "#3749bb", color: "#fff" }}
              aria-label="Recapture photo"
            >
              <FaRedo className="text-[10px] xs:text-xs" />
              Recapture
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-[240px] flex flex-col items-center gap-3">
          <div
            className="w-full max-w-[240px] aspect-video rounded-md flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: "rgba(55, 73, 187, 0.1)" }}
          >
            {stream ? (
              <video
                ref={videoRef}
                className="w-full max-w-[240px] aspect-video object-cover rounded-md"
                autoPlay
                aria-hidden={capturedPhotoDataUrl ? "true" : "false"}
              />
            ) : (
              <FaCamera
                className="text-2xl xs:text-3xl"
                style={{ color: "#666" }}
              />
            )}
          </div>
          <button
            onClick={capturePhoto}
            className="flex items-center gap-1.5 px-2.5 xs:px-3 py-1 xs:py-1.5 text-[10px] xs:text-xs sm:text-sm font-medium rounded-md hover:bg-red-600 hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-[#ef4a23]"
            style={{ backgroundColor: "#ef4a23", color: "#fff" }}
            aria-label="Capture photo"
            disabled={!stream}
          >
            <FaCamera className="text-[10px] xs:text-xs" />
            Capture
          </button>
          <canvas ref={canvasRef} className="hidden" width="640" height="480" />
        </div>
      )}
    </div>
  );
};

export default UseCameraForCapture;
