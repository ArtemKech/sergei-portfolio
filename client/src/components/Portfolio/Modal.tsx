import React, { useState, useEffect } from "react";
import "../../styles/Portfolio/Modal.css";

interface ModalProps {
  src: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ src, closeModal }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [backgroundPosition, setBackgroundPosition] =
    useState<string>("center");
  const [isClosing, setIsClosing] = useState(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeModal]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setCursorPos({ x, y });
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newZoomLevel = Math.max(1, zoomLevel + (e.deltaY < 0 ? 0.2 : -0.2));
    setZoomLevel(newZoomLevel);

    if (cursorPos && newZoomLevel > 1) {
      setBackgroundPosition(`${cursorPos.x}% ${cursorPos.y}%`);
    } else if (newZoomLevel <= 1) {
      setBackgroundPosition(`${cursorPos}`);
    }
  };

  const toggleMagnifier = () => {
    if (zoomLevel > 1) {
      setZoomLevel(1);
      setBackgroundPosition(`${cursorPos}`);
    } else {
      setZoomLevel(2);
      if (cursorPos) {
        setBackgroundPosition(`${cursorPos.x}% ${cursorPos.y}%`);
      }
    }
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  const cursorStyle = zoomLevel > 1 ? "zoom-out" : "zoom-in";

  return (
    <div
      className={`modal ${isClosing ? "hidden" : ""}`}
      onClick={handleCloseModal}
    >
      <div
        className="modal_content"
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
        onClick={(e) => e.stopPropagation()}
        style={{ cursor: cursorStyle }}
      >
        <img
          src={src}
          alt="Full Size"
          onClick={toggleMagnifier}
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: backgroundPosition,
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default Modal;
