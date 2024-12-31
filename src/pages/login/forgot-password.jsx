import React, { useRef, useState } from "react";
import Modal from "../../components/modal";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef();

  const handleReset = (e) => {
    e.preventDefault();
    const email = inputRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info(
          "We are sending a password reset link to your email address."
        );
        setIsOpen(false);
      })
      .catch(() => {
        toast.error("The email was not sent.");
      });
  };

  return (
    <>
      <span
        className="flex  justify-end mt-2 text-end text-sm cursor-pointer text-gray-500 hover:text-gray-400"
        onClick={() => setIsOpen(true)}
      >
        Did you forget your password?
      </span>

      <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl"> Did you forget your password?</h1>

          <p className="text-gray-400">
            We are sending a password reset link to your email address.
          </p>

          <input type="text" className="mt-5 input" ref={inputRef} />

          <button
            onClick={handleReset}
            className="bg-white hover:bg-gray-300 transition text-black rounded-full mt-8 py-1"
          >
            Send email
          </button>

          <button className="bg-white hover:bg-gray-300 transition text-black rounded-full mt-4 py-1">
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ForgotPassword;
