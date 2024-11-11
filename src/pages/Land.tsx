import type React from 'react';
import { FaCircleQuestion } from 'react-icons/fa6';
const Land: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-mmlt-base w-screen h-screen text-mmlt-text">
      <div className="flex flex-col p-5 w-4/5">
        <div className="flex flex-row items-center gap-5 pb-2">
          <FaCircleQuestion className="text-5xl" />
          <p className="font-extrabold text-2xl">Food App</p>
        </div>
        <h1 className="font-bold text-xl">Flavors that unite cultures and flavors that transform lives!</h1>
        <p>Join us on this journey of flavors, where each recipe is designed to surprise you!</p>
        <div className="flex flex-row gap-5 font-semibold text-mmlt-base">
          <button type="button" className="bg-mmlt-peach px-8 py-1 rounded-full">
            Vegan Recipes
          </button>
          <button type="button" className="bg-mmlt-mauve px-8 py-1 rounded-full">
            Mexican Food
          </button>
          <button type="button" className="bg-mmlt-teal px-8 py-1 rounded-full">
            Chinese Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default Land;
