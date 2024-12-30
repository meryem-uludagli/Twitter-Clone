import React, { useState } from "react";
import Modal from "../../components/modal";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

const ForgotPassword = () => {
  const [isOpen, setIsOpen] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;

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
        className="flex justify-end text-sm text-gray-500 hover:text-gray-400 mt-2 text-end cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {" "}
        Did you forget your password?
      </span>

      <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <h1 className="text-3xl"> Did you forget your password?</h1>

          <p className="text-gray-400">
            We are sending a password reset link to your email address.
          </p>
          <input type="text" className="mt-5 input" />
          <button
            type="submit"
            className="bg-white hover:bg-gray-300 transition text-black rounded-full mt-8 py-1"
          >
            Send email
          </button>
          <button
            type="button"
            className="bg-white hover:bg-gray-300 transition text-black rounded-full mt-4 py-1"
          >
            Cancel
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ForgotPassword;
