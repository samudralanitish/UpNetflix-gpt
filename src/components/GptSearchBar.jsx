import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const languageKey = useSelector(store => store.config.lang);
  return (
    <div className="pt-[13%] flex justify-center relative ">
      <form className="w-1/2 bg-black grid grid-cols-9">
        <input
          type="text"
          className="p-4 m-4 col-span-6"
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button className="py-2 m-4 px-4 bg-red-700 rounded-lg text-white col-span-3">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar