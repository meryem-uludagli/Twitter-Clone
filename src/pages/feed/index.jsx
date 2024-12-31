import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import Aside from "./aside";
import Nav from "./nav";
import { useEffect, useState } from "react";

const Feed = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUser(user));

    return () => unsub();
  }, []);
  return (
    <div className="h-screen bg-black overflow-hidden text-white grid grid-cols-[1fr_minmax(300px,600px)_1fr]">
      <Nav user={user} />
      <Main user={user} />
      <Aside />
    </div>
  );
};

export default Feed;
