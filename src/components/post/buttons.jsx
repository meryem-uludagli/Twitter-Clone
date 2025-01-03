import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { FaHeart, FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { db, auth } from "../../firebase";

const Buttons = ({ tweet }) => {
  const isLiked = tweet.likes.includes(auth.currentUser.uid);

  const toggleLike = () => {
    const tweetRef = doc(db, "tweets", tweet.id);

    updateDoc(tweetRef, {
      likes: isLiked
        ? arrayRemove(auth.currentUser.uid)
        : arrayUnion(auth.currentUser.uid),
    });
  };
  return (
    <div className="flex justify-between items-center text-zinc-500">
      <button
        className="post-icon hover:bg-blue-400/20
      hover:text-blue-400 "
      >
        <FaRegComment />
      </button>
      <button className="post-icon hover:bg-green-300/20 hover:text-green-400">
        <FaRetweet />
      </button>
      <button
        className="items-center flex hover:text-pink-500 relative"
        onClick={toggleLike}
      >
        <div className="post-icon hover:bg-pink-400/20">
          {isLiked ? <FaHeart className="text-pink-600" /> : <FaRegHeart />}
        </div>

        <span className={`${isLiked && "text-pink-500"}absolute-end-1`}>
          {tweet.likes.length}
        </span>
      </button>

      <button className="post-icon hover:bg-blue-300/20 hover:text-blue-400">
        <FaShareNodes />
      </button>
    </div>
  );
};

export default Buttons;
