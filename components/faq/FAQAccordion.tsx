'use client';

import { useState } from 'react';
import { cn } from '@/utils/cn';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-0">
      {items.map((item) => (
        <div
          key={item.id}
          className="border-b border-white/[0.06]"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full py-6 flex items-center justify-between hover:opacity-80 transition-opacity duration-300"
          >
            <h3 className="text-left text-[15px] text-white/60 font-light">
              {item.question}
            </h3>
            <svg
              className={cn(
                'w-4 h-4 text-white/20 flex-shrink-0 ml-6 transition-transform duration-500',
                openId === item.id ? 'rotate-45' : ''
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 5v14M5 12h14"
              />
            </svg>
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-500',
              openId === item.id ? 'max-h-96 pb-6' : 'max-h-0'
            )}
          >
            <p className="text-white/30 leading-relaxed font-light text-[14px] pr-10">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
