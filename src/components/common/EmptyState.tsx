import { Link } from 'react-router-dom';

interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  actionText?: string;
  actionLink?: string;
}

export default function EmptyState({
  icon = '📦',
  title,
  description,
  actionText,
  actionLink,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <span className="text-6xl">{icon}</span>
      <h3 className="text-lg font-medium text-base-content/70">{title}</h3>
      {description && (
        <p className="text-sm text-base-content/40">{description}</p>
      )}
      {actionText && actionLink && (
        <Link to={actionLink} className="btn btn-primary btn-sm mt-2">
          {actionText}
        </Link>
      )}
    </div>
  );
}
