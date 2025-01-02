import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaRegSmile } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineGifBox } from "react-icons/md";
import { toast } from "react-toastify";
import { db } from "../../firebase";
import uploadToStorage from "../../firebase/uploadToStorage";

const Form = ({ user }) => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const clearImage = () => {
    setImage(null);
    fileInputRef.current.value = null;
    fileInputRef.current.files = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target.text.value.trim();
    const file = e.target.image.files[0];

    if (!text && !file)
      return toast.warning("Please specify the content of the post.");

    const imageUrl = await uploadToStorage(file);
    return;
    const tweetsCol = collection(db, "tweets");

    await addDoc(tweetsCol, {
      content: {
        text,
        image: null,
      },
      isEdited: false,
      likes: [],
      user: {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      },
      createdAt: serverTimestamp(),
    });
  };
  return (
    <div className="border-b border-fourth p-4">
      <img
        src={user.photoURL}
        className="size-[35px] md:size-[45px] rounded-full"
      />

      <form className="w-full pt-1" onSubmit={handleSubmit}>
        <textarea
          type="text"
          name="text"
          className="w-full bg-transparent mb-2 md:text-lg text-gray-300 outline-none resize-y min-h-[40px] max-h-[300px]"
          placeholder="What's Happening?"
        />

        {image && (
          <div className="relative mb-3">
            <button
              type="button"
              className="absolute top-3 end-3 p-3 bg-primary/90 rounded-full transition hover:bg-zinc-800"
              onClick={clearImage}
            >
              <IoMdClose />
            </button>
            <img src={image} />
          </div>
        )}

        <div className="flex justify-between">
          <div className="text-third text-xl flex gap-4">
            <label className="form-icon" htmlFor="image">
              <input
                id="image"
                name="image"
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={onImageChange}
              />
              <CiImageOn />
            </label>

            <button className="form-icon" type="button">
              <MdOutlineGifBox />
            </button>
            <button className="form-icon" type="button">
              <FaRegSmile className="text-lg" />
            </button>
          </div>
          <button
            type="submit"
            className="bg-secondary font-bold px-5 py-[6px] rounded-full text-primary tracking-wide hover:brightness-90"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
