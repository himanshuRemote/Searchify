
import React, { useState, useEffect } from 'react';
import { SearchOption, OptionConfig } from './types';
import { BookOpenIcon, GlobeAltIcon, PhotoIcon, ChatBubbleLeftRightIcon, PlayCircleIcon, SparklesIcon } from './components/icons';
import SearchBar from './components/SearchBar';
import OptionCard from './components/OptionCard';

const SEARCH_OPTIONS: OptionConfig[] = [
  { 
    id: SearchOption.Research, 
    title: 'Research Articles', 
    urlTemplate: 'https://scholar.google.com/scholar?q={query}',
    icon: (props) => <BookOpenIcon {...props} className="h-10 w-10" />
  },
  { 
    id: SearchOption.Domain, 
    title: 'Domain Names', 
    urlTemplate: 'https://www.google.com/search?q={query}&udm=14',
    icon: (props) => <GlobeAltIcon {...props} className="h-10 w-10" />
  },
  { 
    id: SearchOption.Forums, 
    title: 'Forums & Discussions', 
    urlTemplate: 'https://www.google.com/search?udm=18&q={query}',
    icon: (props) => <ChatBubbleLeftRightIcon {...props} className="h-10 w-10" />
  },
  { 
    id: SearchOption.Images, 
    title: 'Images', 
    urlTemplate: 'https://www.google.com/search?tbm=isch&q={query}',
    icon: (props) => <PhotoIcon {...props} className="h-10 w-10" />
  },
  { 
    id: SearchOption.YouTube, 
    title: 'YouTube', 
    urlTemplate: 'https://www.youtube.com/results?search_query={query}',
    icon: (props) => <PlayCircleIcon {...props} className="h-10 w-10" />
  },
  { 
    id: SearchOption.AI, 
    title: 'Ask AI', 
    urlTemplate: 'https://www.perplexity.ai/search?q={query}',
    icon: (props) => <SparklesIcon {...props} className="h-10 w-10" />
  },
];


export default function App() {
  const [query, setQuery] = useState<string | null>(null);

  useEffect(() => {
    // On initial load, check for a query in the URL hash
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const initialQuery = params.get('q');
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleSearchSubmit = (submittedQuery: string) => {
    setQuery(submittedQuery);
    // Update the URL hash to reflect the new search query
    window.location.hash = `q=${encodeURIComponent(submittedQuery)}`;
  };

  const handleOptionSelect = (option: OptionConfig) => {
    if (query) {
      const url = option.urlTemplate.replace('{query}', encodeURIComponent(query));
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <div className="w-full max-w-4xl mx-auto text-center transition-all duration-500 ease-in-out">
        <div className="flex flex-col items-center animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-6">
            Searchify
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
            {!query
              ? 'Your intelligent starting point for any search. Enter a query to begin.'
              : <>Select a destination for <span className="text-indigo-500 dark:text-indigo-400 font-bold">"{query}"</span></>
            }
          </p>
          <SearchBar onSearch={handleSearchSubmit} initialQuery={query || ''} />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full mt-8">
          {SEARCH_OPTIONS.map((option) => (
            <OptionCard
              key={option.id}
              title={option.title}
              icon={<option.icon />}
              onClick={() => handleOptionSelect(option)}
              disabled={!query}
            />
          ))}
        </div>
      </div>
      <footer className="absolute bottom-4 text-sm text-gray-500 dark:text-gray-400">
        Powered by your curiosity.
      </footer>
    </main>
  );
}
