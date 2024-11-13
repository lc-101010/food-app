import type React from 'react';
import { FaCircleQuestion } from 'react-icons/fa6';
import About from '../components/About';
const Land: React.FC = () => {
  return (
    <div className="bg-lc-base text-lc-text">
      <div className="flex flex-col items-center w-screen h-screen">
        <div className="flex flex-col justify-around p-5 w-4/5 h-full">
          <div className="flex flex-row items-center gap-5 pb-2">
            <FaCircleQuestion className="text-5xl" />
            <p className="font-extrabold text-2xl">Food App</p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <p className="font-bold text-xl">Flavors that unite cultures and flavors that transform lives!</p>
              <p>Join us on this journey of flavors, where each recipe is designed to surprise you!</p>
            </div>
            <div className="flex flex-row gap-5 font-semibold text-lc-base">
              <button type="button" className="bg-lc-peach px-8 py-1 rounded-full">
                Vegan Recipes
              </button>
              <button type="button" className="bg-lc-mauve px-8 py-1 rounded-full">
                Mexican Food
              </button>
              <button type="button" className="bg-lc-teal px-8 py-1 rounded-full">
                Chinese Food
              </button>
            </div>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Land;
