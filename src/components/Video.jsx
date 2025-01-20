import React from "react";
import videoSrc from "../videos/smh.jpg";
import { NavLink } from "react-router-dom";

export default function Video() {
  return (
    <>
      <div className="flex justify-center max-w-[1220px] mx-auto mb-20 items-center p-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <video
              className="w-full max-w-4xl rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              src={videoSrc} // Use the imported video file
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-bold mb-5">Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              deserunt nostrum iure fugit dolorem odio tenetur magnam. Nihil
              eius cupiditate aliquam quasi est, illo excepturi sit doloremque
              ullam quos voluptas.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              deserunt nostrum iure fugit dolorem odio tenetur magnam. Nihil
              eius cupiditate aliquam quasi est, illo excepturi sit doloremque
              ullam quos voluptas.
            </p>
            <NavLink
              to="/explore"
              className="px-5 py-2 font-bold text-center bg-green-500 rounded-full text-white hover:bg-green-400 duration-500"
            >
              Explore
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
