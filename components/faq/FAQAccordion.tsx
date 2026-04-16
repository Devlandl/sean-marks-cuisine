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
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="border-2 border-brand-dark/20 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-brand-cream/50 transition-colors"
          >
            <h3 className="text-left text-lg font-semibold text-brand-dark">
              {item.question}
            </h3>
            <svg
              className={cn(
                'w-6 h-6 text-brand-gold flex-shrink-0 ml-4 transition-transform duration-300',
                openId === item.id ? 'rotate-180' : ''
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
          {openId === item.id && (
            <div className="px-6 py-4 bg-brand-cream/30 border-t-2 border-brand-dark/20">
              <p className="text-brand-dark/80 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
