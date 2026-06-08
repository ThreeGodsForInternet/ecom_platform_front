import { FileText } from 'lucide-react';

interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({ message = '暂无数据' }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-slate-400">
      <FileText size={48} className="mb-4" />
      <p className="text-base">{message}</p>
    </div>
  );
}
