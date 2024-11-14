import type React from 'react';
import Menu from '../components/Menu';

const Home: React.FC = () => {
  return (
    <div className="flex bg-lc-base w-screen h-screen text-lc-text">
      <div className="flex flex-row p-2">
        <div className="px-2 border-r-2 border-lc-mantle">
          <Menu />
        </div>
        <div className="flex flex-col">content</div>
      </div>
    </div>
  );
};

export default Home;
