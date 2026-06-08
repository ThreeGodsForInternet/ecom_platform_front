import type { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: number | string;
  icon?: ReactNode;
  trend?: number;
}

export default function StatCard({ title, value, icon, trend }: StatCardProps) {
  const formatValue = (val: number | string) => {
    if (typeof val === 'number') {
      return val.toLocaleString();
    }
    return val;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-slate-800">{formatValue(value)}</p>
          {trend !== undefined && (
            <p className={`text-xs mt-2 ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}% 较昨日
            </p>
          )}
        </div>
        {icon && (
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
