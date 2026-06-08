import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (keyword: string) => void;
}

export default function SearchBar({ placeholder = '搜索...', onSearch }: SearchBarProps) {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    onSearch?.(keyword);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64"
        />
      </div>
      <button
        onClick={handleSearch}
        className="btn btn-primary"
      >
        搜索
      </button>
    </div>
  );
}
