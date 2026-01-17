"use client";
import { signOut } from "next-auth/react";

const LogOut = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="btn"
    >
      Logout
    </button>
  );
};

export default LogOut;