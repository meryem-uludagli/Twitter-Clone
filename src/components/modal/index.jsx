import React from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ children, isOpen, close }) => {
  return (
    isOpen && (
      <div className="fixed bg-zinc-800/50 inset-0 backdrop-sm z-[9999] grid place-items-center">
        <div className="bg-black py-10 px-8 w-3/4 max-w-[600px]">
          <div className="flex justify-end">
            <button onClick={close}>
              <IoMdClose className="text-3xl transition hover:text-gray-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
