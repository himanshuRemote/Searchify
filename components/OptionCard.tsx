
import React from 'react';

interface OptionCardProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  disabled: boolean;
}

const OptionCard: React.FC<OptionCardProps> = ({ icon, title, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      className={`group flex flex-col items-center justify-center p-6 bg-white/40 dark:bg-gray-800/50 rounded-2xl shadow-md backdrop-blur-lg border border-white/20 dark:border-gray-700/50 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-transparent ${
        disabled
          ? 'opacity-60 cursor-not-allowed filter grayscale'
          : 'hover:bg-white/60 dark:hover:bg-gray-700/60 hover:scale-105'
      }`}
    >
      <div className={`text-indigo-500 dark:text-indigo-400 mb-3 transition-transform duration-300 ${!disabled && 'group-hover:scale-110'}`}>
        {icon}
      </div>
      <span className="text-gray-800 dark:text-gray-200 font-semibold text-center">{title}</span>
    </button>
  );
};

export default OptionCard;
