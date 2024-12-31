import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import PageLoader from "../loader/page-loader";

const Protected = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUser(user));
    return () => unsub();
  }, []);

  if (user === undefined) {
    return <PageLoader />;
  }

  if (user === null) {
    return <Navigate to="/" replace />;
  }

  if (!user?.emailVerified) {
  }
  return <Outlet />;
};

export default Protected;