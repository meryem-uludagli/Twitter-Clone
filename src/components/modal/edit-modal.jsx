import Modal from ".";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/index";
import { useState } from "react";
import uploadToStorage from "../../firebase/uploadToStorage";

const EditModal = ({ isOpen, close, tweet }) => {
  const [isPicDeleting, setIsPicDeleting] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target[0].value;
    const file = e.target[1].files[0];

    const tweetRef = doc(db, "tweets", tweet.id);

    let updatedData = {
      "content.text": text,
      isEdited: true,
    };

    if (isPicDeleting) {
      updatedData["content.image"] = null;
    }

    if (file) {
      const imageUrl = await uploadToStorage(file);
      updatedData["content.image"] = imageUrl;
    }

    await updateDoc(tweetRef, updatedData);

    setIsPicDeleting(false);
    close();
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <h1 className="text-2xl">Edit Tweet</h1>

      <form onSubmit={handleSubmit} className="flex flex-col mt-10">
        <label>Change Content</label>
        <textarea
          type="text"
          className="mt-3 input resize-y min-h-12 max-h-[250px]"
          defaultValue={tweet.content.text}
        />

        <label className="mt-10 mb-2">Add Photo / Change</label>

        {!isPicDeleting && tweet.content.image ? (
          <button
            type="button"
            className="bg-fourth p-1 rounded-md transition hover:bg-fourth/50"
            onClick={() => setIsPicDeleting(true)}
          >
            Remove Photo
          </button>
        ) : (
          <input type="file" />
        )}

        <div className="flex justify-end gap-5 mt-10">
          <button type="button" onClick={close}>
            Cancel
          </button>
          <button
            type="submit"
            className="bg-secondary text-black transition px-3 py-1 rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
