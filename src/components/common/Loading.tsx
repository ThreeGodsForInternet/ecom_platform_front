interface LoadingProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  text?: string;
}

export default function Loading({ size = 'lg', text = '加载中...' }: LoadingProps) {
  const sizeMap = {
    xs: 'loading-xs',
    sm: 'loading-sm',
    md: 'loading-md',
    lg: 'loading-lg',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20">
      <span className={`loading loading-spinner ${sizeMap[size]} text-primary`} />
      {text && <p className="text-base-content/50 text-sm">{text}</p>}
    </div>
  );
}
