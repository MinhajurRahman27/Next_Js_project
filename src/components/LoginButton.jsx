"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button className="btn" disabled>
        Loading...
      </button>
    );
  }

  if (session) {
    return (
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="btn"
      >
        Logout
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="btn"
    >
      Login Now
    </button>
  );
};

export default LoginButton;
