import { useState } from 'react';
import { LuChevronDown, LuChevronUp, LuLanguages, LuSearch } from 'react-icons/lu';

const Menu: React.FC = () => {
  const currentLang: string = 'en';
  const langs: { key: string; value: string }[] = [
    { key: 'en', value: 'English' },
    { key: 'es', value: 'Spanish' },
  ];

  const [iLang, setILang] = useState<boolean>(false);

  const toggleILang = () => setILang((prevState) => !prevState);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') toggleILang();
  };

  return (
    <div className="flex flex-col justify-between pr-2 h-full font-popp">
      <div className="flex flex-col">
        <p className="py-2 pr-4 font-extrabold font-mont text-3xl">FoodApp</p>
        <div className="flex flex-col gap-2 bg-lc-mantle p-2 rounded-md">
          <div className="flex flex-row justify-between items-center gap-2">
            <div className="flex flex-row gap-2">
              <LuLanguages />
              <p className="text-xs">{langs.find((lang) => lang.key === currentLang)?.value}</p>
            </div>
            <div className="hover:text-lc-overlay0" onClick={toggleILang} onKeyDown={handleKeyPress}>
              {iLang ? <LuChevronDown /> : <LuChevronUp />}
            </div>
          </div>
          <div className={`flex flex-col gap-2 ${iLang && 'hidden'}`}>
            {langs.map((lang) => (
              <div key={lang.key} className={`flex flex-row ${lang.key === currentLang && 'hidden'} gap-2`}>
                <LuLanguages className="text-transparent" />
                <p className="text-xs hover:text-lc-mauve hover:underline hover:cursor-pointer">{lang.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center bg-lc-surface0 mb-4 p-2 rounded-md font-mont text-sm">
        <input
          type="text"
          placeholder="search food ..."
          className="bg-transparent placeholder:text-lc-text outline-none"
        />
        <LuSearch className="hover:text-lc-mauve" />
      </div>
    </div>
  );
};

export default Menu;
