import { useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getButtonLabel = () => {
    switch (i18n.language) {
      case 'zh-CN':
        return '中文';
      case 'ja-JP':
        return '日本語';
      default:
        return 'English';
    }
  };

  return (
    <div className="absolute right-0 z-10 ml-24 mt-64 mr-24">
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="p-8 rounded-16 bg-[#1F2328] hover:bg-[#33383E] active:bg-[#565A60] flex items-center justify-center text-white font-bold"
        >
          {getButtonLabel()}
        </button>
        {isOpen && (
          <div className="absolute rounded-16 top-16 right-0 flex flex-col items-center space-y-2 bg-white p-4 rounded-lg shadow-lg">
            <button
              onClick={() => changeLanguage('en-US')}
              className="w-24 h-10 bg-gray-200 text-black rounded-full shadow-lg flex items-center justify-center hover:bg-gray-300 focus:outline-none"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('zh-CN')}
              className="w-24 h-10 bg-gray-200 text-black rounded-full shadow-lg flex items-center justify-center hover:bg-gray-300 focus:outline-none"
            >
              中文
            </button>
            <button
              onClick={() => changeLanguage('ja-JP')}
              className="w-24 h-10 bg-gray-200 text-black rounded-full shadow-lg flex items-center justify-center hover:bg-gray-300 focus:outline-none"
            >
              日本語
            </button>
          </div>
        )}
      </div>
    </div>
  );
};