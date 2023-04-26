"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import PropTypes from "prop-types";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [modalClasses, setModalClasses] = useState<string>("hidden");

  // update modalClasses based on isOpen prop
  useEffect(() => {
    setModalClasses(isOpen ? "" : "hidden");
  }, [isOpen]);

  return (
    <>
      <div
        className={`${modalClasses} fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm`}
      >
        <div className="flex items-center justify-center min-h-screen">
          <div
            className={`relative rounded-lg w-96 mx-auto bg-white dark:bg-gray-800 text-gray-800 dark:text-white`}
          >
            <div className="p-6">{children}</div>
            <button
              className="absolute transition-all top-0 right-0 p-2 text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
              onClick={onClose}
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Close</title>
                <path
                  fillRule="evenodd"
                  d="M12.05 10l5.8-5.8a1 1 0 00-1.42-1.4L10.6 8.6 4.8 2.8a1 1 0 00-1.4 1.42L8.6 10l-5.8 5.8a1 1 0 001.42 1.4l5.8-5.8 5.8 5.8a1 1 0 001.4-1.42L12.05 10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50"></div>}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
