import { useState, type FormEvent } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function SearchBar({
  placeholder = '搜索商品...',
  className = '',
  size = 'md',
}: SearchBarProps) {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const sizeClass = { sm: 'input-sm', md: '', lg: 'input-lg' };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products?keyword=${encodeURIComponent(keyword.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex items-center ${className}`}>
      <label className={`input ${sizeClass[size]} flex items-center gap-2 w-full`}>
        <input
          type="search"
          className="grow outline-none"
          placeholder={placeholder}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" className="text-base-content/40 hover:text-primary transition-colors">
          <Search size={18} />
        </button>
      </label>
    </form>
  );
}
