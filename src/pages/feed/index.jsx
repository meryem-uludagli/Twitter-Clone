import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Feed = () => {
  const handleClick = () =>
    signOut(auth).then(() => toast.info("Logged out of the account"));

  if (!auth.currentUser.emailVerified)
    return <h1>YOU CANNOT VIEW THIS PAGE.</h1>;
  return (
    <div>
      <h1>Feed Page</h1>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
};

export default Feed;
