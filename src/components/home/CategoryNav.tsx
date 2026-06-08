import { Link } from 'react-router-dom';
import { mockCategories } from '../../data/mockCategories';

export default function CategoryNav() {
  return (
    <div className="grid grid-cols-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 py-4">
      {mockCategories.map((cat) => (
        <Link
          key={cat.id}
          to={`/products?categoryId=${cat.id}`}
          className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-primary/5 transition-colors group"
        >
          <span className="text-2xl transition-transform group-hover:scale-110">
            {cat.icon}
          </span>
          <span className="text-xs text-base-content/70 group-hover:text-primary transition-colors">
            {cat.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
