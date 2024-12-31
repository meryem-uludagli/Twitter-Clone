import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import PageLoader from "../loader/page-loader";
import { toast } from "react-toastify";

const Protected = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUser(user));
    return () => unsub();
  }, []);

  if (user === undefined) {
    return <PageLoader />;
  }

  if (user === null || !user?.emailVerified) {
    if (!user?.emailVerified) toast.info("Please verify your email address.");
    return <Navigate to="/" replace />;
  }

  if (!user?.emailVerified) {
  }
  return <Outlet />;
};

export default Protected;
