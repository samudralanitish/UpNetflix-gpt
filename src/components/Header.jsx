import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix logo"
      />
      <div className="flex p-2">
        <img className="w-12 h-12"
          src="https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABSrORF30U1Rk5FrkSi6BbVZ5x5n3VNQWZCBorYEtC-IOLZ6cM0kqkxfPcIUliT8xRjEoyda17ByoYVq8mQUMEvRzJulA65M.png?r=ade"
          alt="user-icon"
        />
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>
    </div>
  );
};

export default Header;
