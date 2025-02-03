import { LuSquareCheck } from "react-icons/lu";
import image from "./../assets/lamp.jpg";
import React from "react";

const Hero: React.FC = () => {
  return (
    <figure className="relative flex flex-col justify-center overflow-hidden rounded-lg bg-white p-7">
      <h1 className="mb-5">Welcome back, Angelina</h1>
      <p className="mb-4 font-medium">
        You've completed <span className="text-primary font-bold">60%</span> of
        your tasks for today. <br />
        Your progress is{" "}
        <span className="text-primary font-bold">very good!</span>
      </p>
      <div className="mb-5">
        <button className="bg-primary flex items-center justify-between gap-3 rounded-full px-6 py-2 font-medium text-white">
          <LuSquareCheck />
          Start completing today's tasks
        </button>
      </div>
      <div className="absolute top-0 right-0 h-full w-auto pt-5">
        <img
          src={image}
          alt="Hero image"
          className="h-full w-full object-cover"
        />
      </div>
    </figure>
  );
};

export default Hero;
