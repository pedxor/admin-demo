import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentType: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, documentType }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="animate-fadeIn rounded-lg bg-white p-5 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{documentType}</h2>
        <button
          className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
