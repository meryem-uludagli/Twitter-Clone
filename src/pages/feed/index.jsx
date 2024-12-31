import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import Aside from "./aside";
import Nav from "./nav";

const Feed = () => {
  return (
    <div className="h-screen bg-black overflow-hidden text-white grid grid-cols-[1fr_minmax(300px,600px)_1fr]">
      <Nav />
      <Main />
      <Aside />
    </div>
  );
};

export default Feed;
