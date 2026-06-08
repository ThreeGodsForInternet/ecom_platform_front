import type { ReactNode } from 'react';
interface PageContainerProps {
  title: string;
  children: ReactNode;
  extra?: ReactNode;
}

export default function PageContainer({ title, children, extra }: PageContainerProps) {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
        {extra}
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">{children}</div>
    </div>
  );
}
