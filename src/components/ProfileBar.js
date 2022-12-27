import { useEffect, useState } from "react";
import { Bookmarks, FacebookLogo, LinkedInLogo, TwitterLogo } from "../Assets/Icons.js"

function ProfileBar({ detailWriteups, id }) {
   const [seed, setSeed] = useState("");
   useEffect(() => {
     setSeed(Math.floor(Math.random() * 5000));
   }, []);
  return (
    <div className="flex items-center mt-12">
      <img
        src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        className="rounded-full h-10 w-10 mr-2"
        alt=""
      />
      <div className="justify-between w-screen items-center flex">
        <div className="">
          <h5 className="font-bold font-Three">{detailWriteups[id].authorName}</h5>
          <div className="flex font-semibold font-Three">
            <p>December 14</p>
            <p className="ml-4">10 min</p>
          </div>
        </div>
        <div className="flex items-center">
          <TwitterLogo />
          <FacebookLogo />
          <LinkedInLogo />
          <div className="ml-8">
            <Bookmarks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBar