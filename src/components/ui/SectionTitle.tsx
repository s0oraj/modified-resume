import React from 'react';
interface SectionTitleProps {
  children: ReactNode;
  icon?: ReactNode;
}
export function SectionTitle({
  children,
  icon
}: SectionTitleProps) {
  return <div className="border-b border-gray-800 pb-1 mb-3">
      <h2 className="text-xl font-bold text-[#5DC22D]">{children}</h2>
    </div>;
}