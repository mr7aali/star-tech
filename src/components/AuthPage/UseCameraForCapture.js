import React, { useEffect, useRef, useState } from "react";
import { FaCamera, FaSave, FaRedo, FaSync } from "react-icons/fa";

const UseCameraForCapture = ({ onSavePhoto }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedPhotoDataUrl, setCapturedPhotoDataUrl] = useState(null);
  const [cameraError, setCameraError] = useState(null);
  const [hasCamera, setHasCamera] = useState(true);

  useEffect(() => {
    checkCameraAvailability();
    if (hasCamera && !capturedPhotoDataUrl) {
      startCamera();
    }
    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [capturedPhotoDataUrl, hasCamera]);

  const checkCameraAvailability = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const hasVideoInput = devices.some(
        (device) => device.kind === "videoinput" && device.deviceId
      );
      if (!hasVideoInput) {
        setHasCamera(false);
        setCameraError("No camera detected on this device.");
      } else {
        setHasCamera(true);
      }
    } catch (error) {
      // console.error("Error checking devices:", error);
      setCameraError("Unable to check camera availability.");
    }
  };

  const startCamera = async () => {
    // Ensure HTTPS in production
    if (
      typeof window !== "undefined" &&
      window.location.protocol !== "https:" &&
      process.env.NODE_ENV === "production"
    ) {
      setCameraError("Camera access requires a secure connection (HTTPS).");
      return;
    }

    try {
      const cameraStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" }, // Prefer front-facing camera
      });
      setStream(cameraStream);
      if (videoRef.current) {
        videoRef.current.srcObject = cameraStream;
        setCameraError(null);
      }
    } catch (error) {
      // console.error("Error accessing camera:", error);
      let errorMessage = "Unable to access camera.";
      if (
        error.name === "NotFoundError" ||
        error.name === "DevicesNotFoundError"
      ) {
        errorMessage =
          "No camera found. Please connect a camera and try again.";
        setHasCamera(false);
      } else if (
        error.name === "NotAllowedError" ||
        error.name === "PermissionDeniedError"
      ) {
        errorMessage =
          "Camera access denied. Please enable camera permissions in your browser settings.";
      }
      setCameraError(errorMessage);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const photoDataUrl = canvas.toDataURL("image/png");
      setCapturedPhotoDataUrl(photoDataUrl);
    }
  };

  const savePhoto = () => {
    if (capturedPhotoDataUrl && onSavePhoto) {
      onSavePhoto(capturedPhotoDataUrl);
      alert("Photo saved!"); // Placeholder; replace with form integration
    }
  };

  const retryCamera = () => {
    setCameraError(null);
    setHasCamera(true);
    startCamera();
  };

  return (
    <div className="flex flex-col items-center w-full">
      {cameraError ? (
        <div
          className="w-full max-w-[240px] aspect-video rounded-md p-4 flex flex-col items-center justify-center text-center gap-2"
          style={{
            backgroundColor: "rgba(55, 73, 187, 0.1)",
            borderColor: "#ef4a23",
            borderWidth: "1px",
          }}
          aria-live="polite"
        >
          <p
            className="text-[10px] xs:text-xs sm:text-sm"
            style={{ color: "#ef4a23" }}
          >
            {cameraError}
          </p>
          <button
            onClick={retryCamera}
            className="flex items-center gap-1.5 px-2.5 xs:px-3 py-1 xs:py-1.5 text-[10px] xs:text-xs sm:text-sm font-medium rounded-md hover:bg-red-600 hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-[#ef4a23]"
            style={{ backgroundColor: "#ef4a23", color: "#fff" }}
            aria-label="Retry camera access"
          >
            <FaSync className="text-[10px] xs:text-xs" />
            Retry
          </button>
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
