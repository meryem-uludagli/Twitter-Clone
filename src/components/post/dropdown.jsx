import { deleteDoc, doc } from "firebase/firestore";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { auth, db } from "../../firebase";
import { toast } from "react-toastify";
import { useState, useRef } from "react";
import EditModal from "../modal/edit-modal";

const Dropdown = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef();

  const isOwn = tweet.user.id === auth.currentUser.uid;

  const handleDelete = () => {
    const tweetRef = doc(db, "tweets", tweet.id);

    deleteDoc(tweetRef)
      .then(() => toast.info("Tweet akıştan kaldırıldı"))
      .catch(() => toast.error("Bir sorun oluştu"));
  };

  return (
    isOwn && (
      <>
        <label className="popup">
          <input type="checkbox" ref={inputRef} />
          <div className="burger" tabIndex="0">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className="popup-window">
            <legend>Actions</legend>
            <ul>
              <li>
                <button onClick={() => setIsOpen(true)}>
                  <MdEdit className="text-blue-500" />
                  <span>Edit</span>
                </button>
              </li>
              <hr />
              <li>
                <button onClick={handleDelete}>
                  <FaTrash className="text-red-500" />
                  <span>Remove</span>
                </button>
              </li>
            </ul>
          </nav>
        </label>

        <EditModal
          isOpen={isOpen}
          close={() => {
            setIsOpen(false);
            inputRef.current.checked = false;
          }}
          tweet={tweet}
        />
      </>
    )
  );
};

export default Dropdown;
