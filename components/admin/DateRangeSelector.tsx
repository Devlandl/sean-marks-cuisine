'use client';

import { useState } from 'react';
import { Button } from '@/components/common/Button';

interface DateRangeSelectorProps {
  onApply: (range: DateRange) => void;
}

export interface DateRange {
  type: 'last7days' | 'last30days' | 'last3months' | 'last6months' | 'custom';
  fromDate?: string;
  toDate?: string;
}

export function DateRangeSelector({ onApply }: DateRangeSelectorProps) {
  const [selectedRange, setSelectedRange] = useState<DateRange['type']>('last30days');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleApply = () => {
    if (selectedRange === 'custom') {
      if (!fromDate || !toDate) {
        alert('Please select both from and to dates');
        return;
      }
      onApply({
        type: 'custom',
        fromDate,
        toDate,
      });
    } else {
      onApply({
        type: selectedRange,
      });
    }
  };

  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
        <div className="flex-1">
          <label htmlFor="range-select" className="block text-sm font-medium text-gray-700 mb-2">
            Date Range
          </label>
          <select
            id="range-select"
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value as DateRange['type'])}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
          >
            <option value="last7days">Last 7 days</option>
            <option value="last30days">Last 30 days</option>
            <option value="last3months">Last 3 months</option>
            <option value="last6months">Last 6 months</option>
            <option value="custom">Custom range</option>
          </select>
        </div>

        {selectedRange === 'custom' && (
          <div className="flex flex-col md:flex-row gap-4 flex-1 w-full md:w-auto">
            <div>
              <label htmlFor="from-date" className="block text-sm font-medium text-gray-700 mb-2">
                From
              </label>
              <input
                id="from-date"
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="to-date" className="block text-sm font-medium text-gray-700 mb-2">
                To
              </label>
              <input
                id="to-date"
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
              />
            </div>
          </div>
        )}

        <Button
          onClick={handleApply}
          variant="secondary"
          size="md"
          className="w-full md:w-auto"
        >
          Apply
        </Button>
      </div>
    </div>
  );
}
